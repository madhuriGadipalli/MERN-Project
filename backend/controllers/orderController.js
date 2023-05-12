import asyncHandler from "express-async-handler";
import Orders from "../model/orderDetails.js";
import Cart from "../model/cartModel.js";

//@desc Post order details
//@Route POST/api/order
//@access public
export const orderDetails = asyncHandler(async (req, res) => {
  const {
    orderItems,
    paymentMethod,
    shippingAdress,
    shippingPrice,
    taxPrice,
    totalPrice,
    itemsPrice,
  } = req.body;
  //const orderDetails = await Orders.create(req.body);
  const newOrder = new Orders({
    orderItems,
    paymentMethod,
    shippingAdress,
    shippingPrice,
    taxPrice,
    totalPrice,
    itemsPrice,
    user: req.user._id,
  });
  console.log("newOrder", newOrder);
  const saveOrders = await newOrder.save();
  res.status(200).json(saveOrders);
});

export const getOrderById = asyncHandler(async (req, res) => {
  const order = await Orders.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(401);
    throw new Error("Order is emplty");
  }
});

export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Orders.findById(req.params.id);
  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    update_time: req.body.update_time,
    status: req.body.status,
    id: req.body.id,
    email_address: req.body.payer.email_address,
  };
  const updatedOrder = await order.save();
  const user = req.user._id;

  if (order) {
    const updateCart = await Cart.deleteMany({ user: user });

    console.log("deleted", updateCart);

    res.json(updatedOrder);
  } else {
    res.status(401);
    throw new Error("Order not found");
  }
});

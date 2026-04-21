import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, CreditCard, MapPin, ShieldCheck, Truck } from 'lucide-react';

function CheckoutPage({ cartItems, userName, onBack }) {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((acc, item) => acc + ((item.originalPrice - item.price) * item.quantity), 0);
  const deliveryFee = subtotal > 500 ? 0 : 29;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6">
          <button
            onClick={onBack}
            className="btn-secondary inline-flex items-center justify-center gap-2 px-4 py-2.5 w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to products
          </button>
          <div className="text-left sm:text-right">
            <p className="text-sm text-neutral-500">Logged in as</p>
            <p className="font-semibold text-neutral-800">{userName}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2 space-y-5">
            <section className="glass-card p-5 sm:p-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">Delivery Details</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm text-neutral-600">Full name</span>
                  <input className="input-field mt-1.5" defaultValue={userName} />
                </label>
                <label className="block">
                  <span className="text-sm text-neutral-600">Phone number</span>
                  <input className="input-field mt-1.5" placeholder="Enter phone number" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm text-neutral-600">Delivery address</span>
                  <input className="input-field mt-1.5" placeholder="House no, street, landmark" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-sm text-neutral-600">Notes (optional)</span>
                  <input className="input-field mt-1.5" placeholder="Any delivery instructions" />
                </label>
              </div>
            </section>

            <section className="glass-card p-5 sm:p-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">Payment Method</h2>
              <div className="mt-4 grid sm:grid-cols-3 gap-3">
                {[
                  { title: 'UPI', icon: '📱' },
                  { title: 'Card', icon: '💳' },
                  { title: 'Cash on delivery', icon: '💵' },
                ].map((method) => (
                  <button
                    key={method.title}
                    className="card-interactive p-4 text-left border-2 border-transparent hover:border-primary-300"
                  >
                    <p className="text-2xl">{method.icon}</p>
                    <p className="mt-2 font-semibold text-neutral-800">{method.title}</p>
                  </button>
                ))}
              </div>
            </section>

            <section className="glass-card p-5 sm:p-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">Items in this order</h2>
              <div className="mt-4 space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-3 p-3 rounded-2xl bg-neutral-50">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-neutral-800 truncate">{item.name}</p>
                      <p className="text-sm text-neutral-500">{item.quantity_label}</p>
                    </div>
                    <div className="flex flex-col items-end shrink-0 pl-2">
                      <p className="text-sm text-neutral-600">x{item.quantity}</p>
                      <p className="font-bold text-neutral-900">₹{(item.price * item.quantity).toFixed(0)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-6 space-y-5">
            <div className="glass-card p-5 sm:p-6">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">Order Summary</h3>
              <div className="mt-4 space-y-2.5 text-sm">
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                {savings > 0 && (
                  <div className="flex items-center justify-between text-primary-600">
                    <span>Discount savings</span>
                    <span className="font-semibold">-₹{savings.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex items-center justify-between text-neutral-600">
                  <span>Delivery fee</span>
                  <span className={deliveryFee === 0 ? 'text-primary-600 font-semibold' : ''}>
                    {deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="h-px bg-neutral-200 my-2" />
                <div className="flex items-center justify-between text-lg font-bold text-neutral-900">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <motion.button
                className="mt-5 w-full btn-accent flex items-center justify-center gap-2 py-3.5"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Place Order
                <CheckCircle2 className="w-5 h-5" />
              </motion.button>

              <div className="mt-4 space-y-2 text-sm text-neutral-500">
                <p className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary-600" /> Secure payment processing</p>
                <p className="flex items-center gap-2"><Truck className="w-4 h-4 text-primary-600" /> Estimated delivery 10-15 mins</p>
                <p className="flex items-center gap-2"><CreditCard className="w-4 h-4 text-primary-600" /> Easy refunds and support</p>
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary-600" /> Live delivery tracking</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;

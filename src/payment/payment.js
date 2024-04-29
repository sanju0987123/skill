import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; // Assuming CheckoutForm is in a separate file

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51OxrmVSGlvGkmiCR6Okz57zTKTC4sdu2dHDr0KKzEjJaoJx58uaH3QB2Ev8wPHMW4dacd79rgT9oukqdMUbT6Km200zdFeg5wG');

export default function Payment() {
  return (
    <div className="container mx-auto py-10">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51QgngXDgaEfpBMG7RaMjOjNlZ7FmSlbSLvgYo3Q69JCvqbqiXPiAQDmNXyOsq1EJk5yC9T6RbFNy7i2CHgz8R9lj00mgzE1yJt'
);

export default stripePromise;
import React from "react";
import "./payment.scss";

const Payment = () => {
    return (
        <div>
            <div class="payment-section">
                <div class="payment-methods">
                    <div class="payment-method ">
                        <input type="radio" id="paypal" name="payment-method" />
                        <label for="paypal">
                            <img
                                src="https://w7.pngwing.com/pngs/180/94/png-transparent-logo-paypal-payment-system-money-paypal-blue-text-trademark.png"
                                alt="Visa"
                                height="20px"
                                width="40px"
                            />
                        </label>
                    </div>
                    <div class="payment-method ">
                        <input type="radio" id="visa" name="payment-method" />
                        <label for="visa">
                            <img
                                src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
                                alt="Visa"
                                height="20px"
                                width="40px"
                            />
                        </label>
                    </div>
                    <div class="payment-method ">
                        <input
                            type="radio"
                            id="mastercard"
                            name="payment-method"
                        />
                        <label for="mastercard">
                            <img
                                src="https://1000logos.net/wp-content/uploads/2017/03/MasterCard-Logo-1979.png"
                                alt="Visa"
                                height="20px"
                                width="40px"
                            />
                        </label>
                    </div>
                </div>

                <form class="payment-form">
                    <div class="payment-form-group">
                        <label for="card-number" class="payment-form-label">
                            Card Number
                        </label>
                        <input
                            type="text"
                            id="card-number"
                            class="payment-form-input"
                            placeholder="Enter card number"
                        />
                    </div>

                    <div class="payment-form-group">
                        <label for="card-name" class="payment-form-label">
                            Cardholder Name
                        </label>
                        <input
                            type="text"
                            id="card-name"
                            class="payment-form-input"
                            placeholder="Enter cardholder name"
                        />
                    </div>

                    <div class="payment-form-group">
                        <label for="expiry-date" class="payment-form-label">
                            Expiry Date
                        </label>
                        <input
                            type="text"
                            id="expiry-date"
                            class="payment-form-input"
                            placeholder="MM/YY"
                        />
                    </div>

                    <div class="payment-form-group">
                        <label for="cvv" class="payment-form-label">
                            CVV
                        </label>
                        <input
                            type="text"
                            id="cvv"
                            class="payment-form-input"
                            placeholder="Enter CVV"
                        />
                    </div>

                    <button type="submit" class="payment-form-button">
                        Submit Payment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Payment;

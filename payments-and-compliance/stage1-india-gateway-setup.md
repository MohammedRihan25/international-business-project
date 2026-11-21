# Stage 1: India Payment Gateway Setup SOP
## Zero-Budget Onboarding: PayPal Business (India) & Razorpay International

This Standard Operating Procedure guides you through obtaining approval for cross-border payment processing from India without upfront entity registration costs.

---

## 1. PayPal Business (India) Setup Protocol

### Step-by-Step Registration
1. Visit `paypal.com/in/business` and select **Sign Up for a Business Account**.
2. **Business Type:** Choose **Individual** (Operating as a Sole Proprietor using your personal PAN card).
3. **Product / Service Classification (RBI Purpose Code):**
   * Category: *Retail / E-Commerce / Consumer Goods*
   * Sub-category: *Export of physical goods / Other merchandise*
   * Purpose Code: **`P0103` (Advance receipts against export of goods)** OR **`P0108` (Goods sold under merchanting / offshore cross-border trade)**.
4. **Link Identity & Banking:**
   * Enter personal PAN (Permanent Account Number).
   * Link your Indian Savings or Current Account IFSC & Account Number.
   * PayPal will make 2 micro-deposits (e.g., ₹1.12 and ₹1.45). Verify these in 48 hours to complete bank linkage.
5. **Enable Daily Auto-Withdrawal:**
   * Under Indian Foreign Exchange Management Act (FEMA) regulations, PayPal cannot store foreign balances overnight. All incoming USD is automatically converted to INR and swept into your Indian bank account daily on a rolling cycle.

---

## 2. Razorpay International Card Processing Setup

Razorpay allows you to accept international credit cards (Visa, MasterCard, Amex) from US/UK shoppers directly on your store.

### Key Pre-requisites for Instant Approval:
1. **Live, Functional Storefront:** Razorpay compliance officers inspect your website before activating international payments.
2. **Mandatory Storefront Legal Pages (Must be in Footer):**
   * **About Us / Contact Us:** Clear business email (`support@yourdomain.com`), operational phone number, and physical contact address (can be your home address as an individual proprietor).
   * **Privacy Policy:** Explicitly stating compliance with GDPR / CCPA.
   * **Terms & Conditions:** Describing order placement, USD currency billing, and governing law.
   * **Shipping & Delivery Policy:** Stating realistic 5–10 business days international delivery with tracking carrier details.
   * **Refund & Cancellation Policy:** Clear 30-day return policy and procedure.
3. **Submit International Enablement Request:**
   * Go to Razorpay Dashboard -> `Settings` -> `Payment Methods` -> `International Payments` -> Click **Enable International Payments**.
   * When asked for business documentation: Select "Individual / Unregistered Business", upload PAN card, Aadhaar, and bank statement/cancelled cheque.
   * Purpose: Export of consumer wellness goods / personal care tools.

---

## 3. Mandatory RBI Purpose Codes & FIRA Tracking

Under RBI Circular A.P. (DIR Series) No. 95, all inward foreign remittances into India require an official Purpose Code:

| Purpose Code | Official RBI Definition | When to Use |
| :--- | :--- | :--- |
| **P0103** | Advance receipts against export of goods | Default code when receiving customer payments before goods arrive |
| **P0108** | Goods sold under merchanting / offshore trade | When goods ship from an overseas supplier (China) directly to US/UK |
| **P0807** | Offshore trade transactions | Secondary code accepted by select authorized dealer banks |

### How to Retrieve Monthly e-FIRAs (Foreign Inward Remittance Advice):
1. In PayPal: Go to `Reports` -> `Statements` -> `Custom` -> `Foreign Inward Remittance Advice (FIRA)`.
2. PayPal's partner nodal bank (e.g., Citibank or Standard Chartered) issues automated monthly e-FIRAs in PDF format with zero manual bank visits.
3. Archive these monthly PDF certificates. They serve as legal proof to the Income Tax Department that your inward remittances are export revenues exempt from domestic sales tax.

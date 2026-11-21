#!/usr/bin/env python3
"""
Zero-Budget International Profit & Cash-Flow Hold Calculator
Global Dropship HQ - Cross-Border E-Commerce Strategy Engine
"""

import argparse
import sys

def calculate_metrics(
    selling_price: float = 39.99,
    landed_cogs: float = 13.50,
    gateway_pct: float = 0.044,
    gateway_fixed: float = 0.30,
    fx_fee_pct: float = 0.035,
    refund_pct: float = 0.030,
    ad_cpa: float = 0.00,
    hold_days: int = 8,
    fx_rate: float = 85.00,
    llc_target_usd: float = 500.00
):
    # Gateway fee calculation
    gateway_fee = (selling_price * gateway_pct) + gateway_fixed
    
    # FX conversion fee (spread charged on currency conversion to INR)
    fx_fee = selling_price * fx_fee_pct
    
    # Refund/Dispute safety reserve buffer
    refund_buffer = selling_price * refund_pct
    
    # Total operational transaction deductions
    total_transaction_deductions = gateway_fee + fx_fee + refund_buffer + ad_cpa
    
    # Net inward remittance received before paying COGS
    net_inward_remittance_usd = selling_price - total_transaction_deductions
    
    # Net Take-Home Profit per unit
    net_profit_usd = net_inward_remittance_usd - landed_cogs
    net_profit_inr = net_profit_usd * fx_rate
    net_margin_pct = (net_profit_usd / selling_price) * 100.0 if selling_price > 0 else 0.0
    
    # Orders needed to reach Stage 2 US LLC target
    orders_to_llc = int(llc_target_usd / net_profit_usd) + (1 if (llc_target_usd % net_profit_usd) > 0 else 0) if net_profit_usd > 0 else 0
    
    # Working Capital Float Required during Payout Hold Days
    # Float = Daily Order Volume * Hold Days * Landed COGS per unit
    float_1_order_day = 1 * hold_days * landed_cogs
    float_5_order_day = 5 * hold_days * landed_cogs
    float_10_order_day = 10 * hold_days * landed_cogs

    return {
        "selling_price": selling_price,
        "landed_cogs": landed_cogs,
        "gateway_fee": gateway_fee,
        "fx_fee": fx_fee,
        "refund_buffer": refund_buffer,
        "ad_cpa": ad_cpa,
        "net_inward_remittance_usd": net_inward_remittance_usd,
        "net_profit_usd": net_profit_usd,
        "net_profit_inr": net_profit_inr,
        "net_margin_pct": net_margin_pct,
        "orders_to_llc": orders_to_llc,
        "llc_target_usd": llc_target_usd,
        "hold_days": hold_days,
        "fx_rate": fx_rate,
        "float_1_order_day": float_1_order_day,
        "float_5_order_day": float_5_order_day,
        "float_10_order_day": float_10_order_day,
        "float_1_inr": float_1_order_day * fx_rate,
        "float_5_inr": float_5_order_day * fx_rate,
        "float_10_inr": float_10_order_day * fx_rate,
    }

def print_report(res: dict):
    print("=" * 72)
    print("      GLOBAL DROPSHIP HQ - PROFIT & CASH-FLOW HOLD CALCULATOR       ")
    print("=" * 72)
    print(f"Selling Price (MSRP):             ${res['selling_price']:.2f} USD  (~₹{res['selling_price']*res['fx_rate']:.2f} INR)")
    print(f"Landed COGS (Product + Shipping):  ${res['landed_cogs']:.2f} USD  (~₹{res['landed_cogs']*res['fx_rate']:.2f} INR)")
    print(f"Exchange Rate Benchmark:          1 USD = {res['fx_rate']:.2f} INR")
    print("-" * 72)
    print("TRANSACTION DEDUCTIONS (PER ORDER):")
    print(f"  • Payment Gateway Fee:          ${res['gateway_fee']:.2f} USD")
    print(f"  • Inward FX Spread Fee:         ${res['fx_fee']:.2f} USD")
    print(f"  • Refund / Reserve Buffer:      ${res['refund_buffer']:.2f} USD")
    print(f"  • Paid Ad CPA (Organic = $0):   ${res['ad_cpa']:.2f} USD")
    print("-" * 72)
    print("UNIT NET PROFIT & MARGIN:")
    print(f"  ► Net Profit (USD):             ${res['net_profit_usd']:.2f} USD / order")
    print(f"  ► Net Profit (INR):             ₹{res['net_profit_inr']:.2f} INR / order")
    print(f"  ► Net Profit Margin:            {res['net_margin_pct']:.2f}%")
    print("-" * 72)
    print(f"STAGE 2 US LLC ACCELERATION TARGET (${res['llc_target_usd']:.0f} GOAL):")
    print(f"  ► Orders Needed to Fund US LLC: {res['orders_to_llc']} orders")
    gross_rev_llc = res['orders_to_llc'] * res['selling_price']
    print(f"  ► Corresponding Gross Revenue:  ${gross_rev_llc:.2f} USD  (~₹{gross_rev_llc*res['fx_rate']:.2f} INR)")
    print("-" * 72)
    print(f"WORKING CAPITAL FLOAT REQUIRED (DURING {res['hold_days']}-DAY GATEWAY HOLD):")
    print(f"  • At 1 Order / Day:             ${res['float_1_order_day']:.2f} USD  (₹{res['float_1_inr']:.2f} INR)")
    print(f"  • At 5 Orders / Day:            ${res['float_5_order_day']:.2f} USD  (₹{res['float_5_inr']:.2f} INR)")
    print(f"  • At 10 Orders / Day:           ${res['float_10_order_day']:.2f} USD  (₹{res['float_10_inr']:.2f} INR)")
    print("=" * 72)

def main():
    parser = argparse.ArgumentParser(description="Zero-Budget International Profit & Cash-Flow Calculator")
    parser.add_argument("--price", type=float, default=39.99, help="Selling Price in USD (default: 39.99)")
    parser.add_argument("--cogs", type=float, default=13.50, help="Landed Product + Shipping Cost in USD (default: 13.50)")
    parser.add_argument("--gateway-pct", type=float, default=0.044, help="Gateway fee percentage (default: 0.044 for PayPal India)")
    parser.add_argument("--gateway-fixed", type=float, default=0.30, help="Gateway fixed fee in USD (default: 0.30)")
    parser.add_argument("--fx-pct", type=float, default=0.035, help="FX conversion loss percentage (default: 0.035)")
    parser.add_argument("--refund-pct", type=float, default=0.030, help="Refund reserve buffer (default: 0.030)")
    parser.add_argument("--ad-cpa", type=float, default=0.00, help="Ad spend CPA in USD (default: 0.0 for organic)")
    parser.add_argument("--hold-days", type=int, default=8, help="Days funds are held before release (default: 8)")
    parser.add_argument("--fx-rate", type=float, default=85.00, help="USD to INR exchange rate (default: 85.00)")
    parser.add_argument("--target-llc", type=float, default=500.00, help="US LLC formation target in USD (default: 500.00)")
    
    args = parser.parse_args()
    
    res = calculate_metrics(
        selling_price=args.price,
        landed_cogs=args.cogs,
        gateway_pct=args.gateway_pct,
        gateway_fixed=args.gateway_fixed,
        fx_fee_pct=args.fx_pct,
        refund_pct=args.refund_pct,
        ad_cpa=args.ad_cpa,
        hold_days=args.hold_days,
        fx_rate=args.fx_rate,
        llc_target_usd=args.target_llc
    )
    
    print_report(res)

if __name__ == "__main__":
    main()

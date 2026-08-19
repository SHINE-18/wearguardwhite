'use client';

import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Zap,
  Info
} from 'lucide-react';
import { useModals } from '../providers/ModalProvider';

export const InteractiveRoiCalculator: React.FC = () => {
  const { openQuoteModal } = useModals();

  // Input states
  const [annualTonnage, setAnnualTonnage] = useState<number>(250000);
  const [currentChangeoutsPerYear, setCurrentChangeoutsPerYear] = useState<number>(4);
  const [downtimeHoursPerChangeout, setDowntimeHoursPerChangeout] = useState<number>(16);
  const [downtimeCostPerHour, setDowntimeCostPerHour] = useState<number>(2500);
  const [partsCostPerChangeout, setPartsCostPerChangeout] = useState<number>(18000);
  const [wearLifeMultiplier, setWearLifeMultiplier] = useState<number>(2.4);

  // Calculations
  const currentAnnualDowntimeHours = currentChangeoutsPerYear * downtimeHoursPerChangeout;
  const currentAnnualDowntimeCost = currentAnnualDowntimeHours * downtimeCostPerHour;
  const currentAnnualPartsCost = currentChangeoutsPerYear * partsCostPerChangeout;
  const currentTotalAnnualWearCost = currentAnnualDowntimeCost + currentAnnualPartsCost;

  const newChangeoutsPerYear = Math.max(1, currentChangeoutsPerYear / wearLifeMultiplier);
  const newAnnualDowntimeHours = newChangeoutsPerYear * downtimeHoursPerChangeout;
  const newAnnualDowntimeCost = newAnnualDowntimeHours * downtimeCostPerHour;
  // WearGuard part cost is roughly ~1.12x OEM upfront, but lasts 2.4x longer
  const newPartsCostPerChangeout = partsCostPerChangeout * 1.12;
  const newAnnualPartsCost = newChangeoutsPerYear * newPartsCostPerChangeout;
  const newTotalAnnualCost = newAnnualDowntimeCost + newAnnualPartsCost;

  const annualSavings = Math.max(0, currentTotalAnnualWearCost - newTotalAnnualCost);
  const downtimeHoursSaved = Math.max(0, currentAnnualDowntimeHours - newAnnualDowntimeHours);
  const roiPercentage = Math.round((annualSavings / Math.max(1, newAnnualPartsCost)) * 100);

  return (
    <div className="w-full bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden text-slate-900">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-light opacity-50 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono-tech">
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span>TCO & Downtime ROI Simulator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              Calculate Your Plant Tonnage & Wear Savings
            </h3>
            <p className="text-sm text-slate-600 max-w-xl">
              See the projected financial impact of upgrading standard OEM parts to WearGuard engineered metallurgy (20–60% longer life).
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl text-xs font-mono-tech text-slate-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold">Validated on 120+ Plant Audits</span>
          </div>
        </div>

        {/* Interactive Sliders & Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sliders Input Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Slider 1: Annual Plant Production */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono-tech">
                <span className="text-slate-500 uppercase tracking-wider font-semibold">Annual Plant Tonnage</span>
                <span className="text-blue-700 font-bold">{annualTonnage.toLocaleString()} Tons/Year</span>
              </div>
              <input
                type="range"
                min={50000}
                max={1500000}
                step={25000}
                value={annualTonnage}
                onChange={e => setAnnualTonnage(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Slider 2: Current Change-outs per year */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono-tech">
                <span className="text-slate-500 uppercase tracking-wider font-semibold">Current Change-Outs Per Season</span>
                <span className="text-blue-700 font-bold">{currentChangeoutsPerYear} Change-outs / Year</span>
              </div>
              <input
                type="range"
                min={1}
                max={12}
                step={1}
                value={currentChangeoutsPerYear}
                onChange={e => setCurrentChangeoutsPerYear(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Slider 3: Downtime hours per changeout */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono-tech">
                <span className="text-slate-500 uppercase tracking-wider font-semibold">Downtime Duration per Change-Out</span>
                <span className="text-blue-700 font-bold">{downtimeHoursPerChangeout} Hours / Stop</span>
              </div>
              <input
                type="range"
                min={4}
                max={48}
                step={2}
                value={downtimeHoursPerChangeout}
                onChange={e => setDowntimeHoursPerChangeout(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Slider 4: Hourly cost of plant outage */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono-tech">
                <span className="text-slate-500 uppercase tracking-wider font-semibold">Lost Revenue & Labor / Hour of Outage</span>
                <span className="text-blue-700 font-bold">${downtimeCostPerHour.toLocaleString()} / Hour</span>
              </div>
              <input
                type="range"
                min={500}
                max={10000}
                step={250}
                value={downtimeCostPerHour}
                onChange={e => setDowntimeCostPerHour(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Slider 5: Cost of parts set */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono-tech">
                <span className="text-slate-500 uppercase tracking-wider font-semibold">Current OEM Part Set Replacement Cost</span>
                <span className="text-blue-700 font-bold">${partsCostPerChangeout.toLocaleString()} / Set</span>
              </div>
              <input
                type="range"
                min={2000}
                max={60000}
                step={1000}
                value={partsCostPerChangeout}
                onChange={e => setPartsCostPerChangeout(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Wear Life Multiplier selector */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono-tech">
                <span className="text-slate-700 font-bold">WearGuard Target Metallurgy Factor</span>
                <span className="text-blue-700 font-extrabold">{wearLifeMultiplier.toFixed(1)}x Lifespan</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs font-mono-tech pt-1">
                {[
                  { label: '+20% (1.5x)', val: 1.5, sub: 'Hardened AR450' },
                  { label: '+60% (2.4x)', val: 2.4, sub: '27% High-Chrome' },
                  { label: '+150% (3.2x)', val: 3.2, sub: 'EnduraCast Z-Core' }
                ].map((tier, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setWearLifeMultiplier(tier.val)}
                    className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                      wearLifeMultiplier === tier.val 
                        ? 'bg-blue-700 text-white border-blue-700 shadow-sm' 
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold">{tier.label}</div>
                    <div className={`text-[10px] ${wearLifeMultiplier === tier.val ? 'text-blue-100' : 'text-slate-500'}`}>
                      {tier.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Savings Result Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 text-white shadow-xl space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono-tech">
                  Projected Plant Savings
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono-tech border border-emerald-500/30">
                  +{roiPercentage}% Return
                </span>
              </div>

              {/* Big Dollar Value */}
              <div className="space-y-1">
                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight font-mono-tech">
                  ${Math.round(annualSavings).toLocaleString()}
                </div>
                <div className="text-xs text-cyan-300 font-mono-tech">
                  Estimated Total Annual Cost Reduction
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                  <div className="text-[11px] text-slate-400 font-mono-tech">Prevented Outage</div>
                  <div className="text-lg font-bold text-white font-mono-tech">
                    {Math.round(downtimeHoursSaved)} Hours
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono-tech">Production Recovered</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
                  <div className="text-[11px] text-slate-400 font-mono-tech">Change-Outs Avoided</div>
                  <div className="text-lg font-bold text-white font-mono-tech">
                    {(currentChangeoutsPerYear - newChangeoutsPerYear).toFixed(1)} Stops
                  </div>
                  <div className="text-[10px] text-amber-400 font-mono-tech">Labor Reallocated</div>
                </div>
              </div>

              {/* TCO Comparison Row */}
              <div className="pt-2 space-y-2 text-xs font-mono-tech">
                <div className="flex justify-between text-slate-400">
                  <span>Current Annual Spend (OEM):</span>
                  <span className="text-red-400 font-bold">${Math.round(currentTotalAnnualWearCost).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Projected Spend (WearGuard):</span>
                  <span className="text-emerald-400 font-bold">${Math.round(newTotalAnnualCost).toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* CTA Trigger */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <button
                onClick={() => openQuoteModal(null, `ROI Consultation: ${annualTonnage.toLocaleString()} TPY / $${Math.round(annualSavings).toLocaleString()} savings`)}
                className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider font-mono-tech transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Lock In Wear Audit & Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-[10px] text-slate-400 font-mono-tech">
                Includes complimentary on-site or drawing wear analysis
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

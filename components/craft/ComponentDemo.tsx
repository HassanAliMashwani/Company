'use client';

import React, { useState } from 'react';
import { SlidersHorizontal, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function ComponentDemo() {
  const [toggleActive, setToggleActive] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>('user@studio.dev');
  const [btnState, setBtnState] = useState<'idle' | 'loading' | 'success'>('idle');

  const isValidEmail = inputValue.includes('@') && inputValue.includes('.');

  const handleBtnClick = () => {
    setBtnState('loading');
    setTimeout(() => setBtnState('success'), 800);
    setTimeout(() => setBtnState('idle'), 2400);
  };

  return (
    <div className="p-6 rounded-2xl bg-[#121215] border border-zinc-800 flex flex-col justify-between min-h-[360px]">
      <div>
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              03. shadcn/ui Component Primitives
            </span>
          </div>
          <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
            Functional Component States
          </span>
        </div>

        {/* Component Sandbox Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Interactive Button Component */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex flex-col justify-between">
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-3">
              State Machine Button
            </span>
            <button
              onClick={handleBtnClick}
              disabled={btnState !== 'idle'}
              className={`w-full py-2.5 px-4 rounded-lg text-xs font-bold font-mono flex items-center justify-center gap-2 transition-all ${
                btnState === 'success'
                  ? 'bg-emerald-500 text-black'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-black active:scale-95'
              }`}
            >
              {btnState === 'loading' && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              {btnState === 'success' && <CheckCircle2 className="w-3.5 h-3.5" />}
              <span>
                {btnState === 'idle' && 'Trigger State Action'}
                {btnState === 'loading' && 'Processing...'}
                {btnState === 'success' && 'Action Verified'}
              </span>
            </button>
          </div>

          {/* Interactive Input Validation */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                Input Validation
              </span>
              {isValidEmail ? (
                <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Valid
                </span>
              ) : (
                <span className="text-[9px] font-mono text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> Invalid Format
                </span>
              )}
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg bg-zinc-900 border text-xs font-mono text-white focus:outline-none transition-colors ${
                isValidEmail ? 'border-zinc-800 focus:border-cyan-500' : 'border-rose-500/60'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Switch Toggle Component */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex items-center justify-between font-mono text-xs text-zinc-300">
        <div>
          <span className="block font-bold text-white">System Feature Toggle</span>
          <span className="text-[10px] text-zinc-400">
            State: {toggleActive ? 'ENABLED' : 'DISABLED'}
          </span>
        </div>
        <button
          onClick={() => setToggleActive(!toggleActive)}
          className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none ${
            toggleActive ? 'bg-cyan-500' : 'bg-zinc-800'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full bg-black transition-transform duration-200 ${
              toggleActive ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}

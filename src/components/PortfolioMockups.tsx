import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  Sparkles, 
  Calendar, 
  Users, 
  CreditCard, 
  DollarSign, 
  Search, 
  ChevronRight, 
  Image as ImageIcon, 
  Heart, 
  Share2, 
  Clock, 
  ShoppingCart,
  CheckCircle,
  Play,
  RotateCcw,
  Zap,
  ArrowRight
} from 'lucide-react';

// ==========================================
// 1. BUSINESS WEBSITE MOCKUP (Apex Fintech)
// ==========================================
export function BusinessMockup() {
  const [balance, setBalance] = useState(142500.80);
  const [activeTab, setActiveTab] = useState<'all' | 'deposits' | 'withdraws'>('all');
  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Google Cloud Invoicing', category: 'Infrastructure', amount: -2410.50, date: 'Today, 2:40 PM', type: 'withdraw' },
    { id: 2, name: 'Stripe Payout', category: 'Sales', amount: 12450.00, date: 'Today, 11:15 AM', type: 'deposit' },
    { id: 3, name: 'Figma Pro Subscription', category: 'Software', amount: -150.00, date: 'Yesterday', type: 'withdraw' },
    { id: 4, name: 'Acme Corp Contract Payment', category: 'Consulting', amount: 8500.00, date: 'June 26, 2026', type: 'deposit' },
  ]);

  const [newAmount, setNewAmount] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAmount || !newDesc) return;
    const amountVal = parseFloat(newAmount);
    if (isNaN(amountVal)) return;

    const newTx = {
      id: Date.now(),
      name: newDesc,
      category: amountVal > 0 ? 'Income' : 'Expense',
      amount: amountVal,
      date: 'Just now',
      type: amountVal > 0 ? 'deposit' : 'withdraw'
    };

    setTransactions([newTx, ...transactions]);
    setBalance(prev => prev + amountVal);
    setNewAmount('');
    setNewDesc('');
  };

  const filteredTransactions = transactions.filter(t => {
    if (activeTab === 'deposits') return t.type === 'deposit';
    if (activeTab === 'withdraws') return t.type === 'withdraw';
    return true;
  });

  return (
    <div className="w-full bg-[#0a0a0f] text-white p-4 md:p-6 rounded-2xl font-sans text-xs h-full flex flex-col justify-between">
      {/* Mini Top Bar */}
      <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="font-bold tracking-tight text-sm">Apex <span className="text-emerald-400">Fintech</span></span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] text-neutral-500 hidden sm:inline">Server Node: SG-1</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] font-bold">LIVE NETWORK</span>
        </div>
      </div>

      {/* Grid Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Metric Balance Card */}
        <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 md:col-span-1 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-emerald-500/5 blur-xl pointer-events-none" />
          <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-1">Total Treasury</div>
          <div className="text-lg md:text-xl font-extrabold text-white tracking-tight">
            ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="text-[9px] text-emerald-400 mt-1 flex items-center gap-1">
            <span>+14.2% from last month</span>
          </div>
        </div>

        {/* Transaction Quick Add Form */}
        <form onSubmit={handleAddTransaction} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-950 md:col-span-2 flex flex-col justify-between gap-2">
          <div className="text-[10px] font-bold text-neutral-400">Quick Simulation Ledger</div>
          <div className="grid grid-cols-2 gap-2">
            <input 
              type="text" 
              placeholder="Description (e.g. Contract)"
              value={newDesc}
              onChange={e => setNewDesc(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 px-2.5 py-1.5 rounded text-white text-[10px] focus:border-emerald-500 outline-none"
              required
            />
            <input 
              type="number" 
              placeholder="Amount (-200 or 500)"
              value={newAmount}
              onChange={e => setNewAmount(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 px-2.5 py-1.5 rounded text-white text-[10px] focus:border-emerald-500 outline-none"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-1.5 bg-emerald-500 hover:bg-emerald-600 rounded text-neutral-950 font-bold tracking-wide transition-colors cursor-pointer"
          >
            Inject Financial Event
          </button>
        </form>
      </div>

      {/* Filter Tabs & History */}
      <div className="bg-neutral-900/20 border border-neutral-900 rounded-xl p-3 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-neutral-900 pb-2 mb-2">
          <span className="font-bold text-neutral-300">Transaction Registry</span>
          <div className="flex gap-1">
            {(['all', 'deposits', 'withdraws'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 py-0.5 rounded text-[9px] font-semibold uppercase transition-colors cursor-pointer ${
                  activeTab === tab ? 'bg-emerald-500/10 text-emerald-400' : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Transaction Rows */}
        <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
          {filteredTransactions.map(tx => (
            <div key={tx.id} className="flex items-center justify-between py-1.5 px-2 bg-neutral-900/30 rounded border border-neutral-950 hover:bg-neutral-900/60 transition-colors">
              <div>
                <div className="font-medium text-white">{tx.name}</div>
                <div className="text-[8px] text-neutral-500">{tx.category} • {tx.date}</div>
              </div>
              <span className={`font-bold ${tx.amount > 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
                {tx.amount > 0 ? '+' : ''}${tx.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


// ==========================================
// 2. PORTFOLIO WEBSITE MOCKUP (Lumina Lens)
// ==========================================
export function PortfolioMockup() {
  const [category, setCategory] = useState<'all' | 'cyberpunk' | 'editorial' | 'architecture'>('all');
  const [likes, setLikes] = useState<Record<number, number>>({ 1: 142, 2: 98, 3: 312, 4: 215 });
  const [userLiked, setUserLiked] = useState<Record<number, boolean>>({});

  const portfolioItems = [
    { id: 1, title: 'Neon Desolation', cat: 'cyberpunk', likesKey: 1, color: 'from-purple-900 via-pink-900 to-black', ratio: 'h-24' },
    { id: 2, title: 'Minimalist Monolith', cat: 'architecture', likesKey: 2, color: 'from-neutral-800 to-neutral-950', ratio: 'h-24' },
    { id: 3, title: 'High-Fashion Void', cat: 'editorial', likesKey: 3, color: 'from-orange-950 via-rose-950 to-neutral-900', ratio: 'h-24' },
    { id: 4, title: 'Brutalist Shadows', cat: 'architecture', likesKey: 4, color: 'from-gray-900 to-black', ratio: 'h-24' },
  ];

  const handleLike = (id: number) => {
    if (userLiked[id]) {
      setLikes(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setUserLiked(prev => ({ ...prev, [id]: false }));
    } else {
      setLikes(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setUserLiked(prev => ({ ...prev, [id]: true }));
    }
  };

  const filteredItems = portfolioItems.filter(item => category === 'all' || item.cat === category);

  return (
    <div className="w-full bg-neutral-950 text-neutral-200 p-4 md:p-6 rounded-2xl font-sans text-xs h-full flex flex-col justify-between">
      {/* Title block */}
      <div className="flex items-center justify-between mb-4 border-b border-neutral-900 pb-3">
        <div>
          <span className="font-extrabold tracking-widest text-sm text-white font-mono uppercase">LUMINA <span className="text-pink-500">LENS</span></span>
          <p className="text-[8px] text-neutral-500 tracking-wider">PREMIUM PHOTOGRAPHY PORTFOLIO</p>
        </div>
        <div className="flex gap-2">
          {(['all', 'cyberpunk', 'editorial', 'architecture'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-2 py-0.5 rounded-full font-sans text-[8px] border uppercase transition-all cursor-pointer ${
                category === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-neutral-500 border-neutral-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of gallery */}
      <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto max-h-56">
        {filteredItems.map(item => (
          <div 
            key={item.id}
            className={`relative rounded-xl overflow-hidden bg-gradient-to-br ${item.color} ${item.ratio} border border-neutral-900 group flex flex-col justify-end p-2.5 transition-all duration-300 hover:scale-[1.02]`}
          >
            <div className="absolute inset-0 bg-black/40 opacity-70 group-hover:opacity-30 transition-opacity" />
            
            {/* Visual aesthetic elements */}
            <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-black/60 rounded text-[7px] font-mono uppercase text-pink-400">
              {item.cat}
            </div>

            <div className="relative z-10 flex items-center justify-between w-full mt-auto">
              <span className="font-bold text-[10px] text-white truncate max-w-[70%]">{item.title}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(item.id);
                }}
                className={`p-1 rounded-full cursor-pointer flex items-center gap-1 transition-colors ${
                  userLiked[item.id] ? 'bg-pink-500 text-white' : 'bg-black/60 text-neutral-400 hover:text-white'
                }`}
              >
                <Heart className="w-2.5 h-2.5 fill-current" />
                <span className="text-[8px] font-bold">{likes[item.id]}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer profile tag */}
      <div className="mt-4 pt-3 border-t border-neutral-900 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600" />
          <span className="text-[10px] font-bold text-neutral-400">Lara Sterling <span className="text-[8px] text-neutral-600 font-normal">Artist</span></span>
        </div>
        <button className="text-[9px] hover:text-white flex items-center gap-0.5">
          <span>Inquire Artwork</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}


// ==========================================
// 3. RESTAURANT WEBSITE MOCKUP (Gourmet Roots)
// ==========================================
export function RestaurantMockup() {
  const [category, setCategory] = useState<'signature' | 'drinks' | 'desserts'>('signature');
  const [bookingDate, setBookingDate] = useState('2026-06-28');
  const [bookingTime, setBookingTime] = useState('19:30');
  const [guests, setGuests] = useState(2);
  const [booked, setBooked] = useState(false);

  const menuItems = {
    signature: [
      { name: 'Aged Wagyu Tartare', desc: 'Hand-chopped Prime Ribeye, smoke-infused, truffle crisp', price: 42 },
      { name: 'Glazed Roasted Duck Duo', desc: 'Spiced cherry reductions, confit thigh, wild honey glaze', price: 56 },
    ],
    drinks: [
      { name: 'Prism Alchemy Cocktail', desc: 'Aged Bourbon, citrus botanical reduction, glowing ice sphere', price: 18 },
      { name: 'Single Estate Cabernet', desc: 'Reserve vintage, intense blackberry profiles', price: 22 },
    ],
    desserts: [
      { name: 'Molten Obsidian Cake', desc: '72% single-origin dark chocolate, smoked fleur de sel', price: 16 },
    ],
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
    }, 4000);
  };

  return (
    <div className="w-full bg-[#0c0806] text-[#e7dfda] p-4 md:p-6 rounded-2xl font-sans text-xs h-full flex flex-col justify-between">
      {/* Header and Branding */}
      <div className="flex items-center justify-between border-b border-orange-950/50 pb-3 mb-4">
        <div>
          <span className="font-extrabold tracking-tight text-sm text-amber-100 uppercase">GOURMET <span className="text-orange-500">ROOTS</span></span>
          <p className="text-[8px] text-neutral-500">MICHELIN INSPIRED FLAVORS</p>
        </div>
        <div className="px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[8px] font-bold">
          OPEN FOR BOOKINGS
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {/* Left Side: Dynamic Menu Selection */}
        <div className="bg-neutral-900/30 rounded-xl p-3 border border-neutral-900/60 flex flex-col justify-between">
          <div>
            <div className="flex gap-1.5 mb-3 border-b border-neutral-800 pb-2">
              {(['signature', 'drinks', 'desserts'] as const).map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase transition-colors cursor-pointer ${
                    category === cat ? 'bg-orange-500 text-black' : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {menuItems[category].map((item, i) => (
                <div key={i} className="flex justify-between items-start gap-2">
                  <div>
                    <div className="font-bold text-neutral-100 text-[11px]">{item.name}</div>
                    <div className="text-[9px] text-neutral-500 leading-relaxed mt-0.5">{item.desc}</div>
                  </div>
                  <span className="font-bold text-orange-400 font-mono">${item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-[8px] text-neutral-600 mt-4 italic">Substances may contain allergens. Inquire with stewardship.</p>
        </div>

        {/* Right Side: Interactive Reservation Tool */}
        <div className="bg-neutral-950 rounded-xl p-3 border border-orange-950/20 flex flex-col justify-between relative overflow-hidden">
          {booked ? (
            <div className="absolute inset-0 bg-orange-950/95 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 z-20">
              <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500 flex items-center justify-center mb-2">
                <CheckCircle className="w-5 h-5 text-orange-400" />
              </div>
              <div className="font-bold text-orange-300 text-sm">Table Secured!</div>
              <p className="text-[9px] text-neutral-400 mt-1">A confirmation voucher is dispatched to your active terminal.</p>
              <button 
                onClick={() => setBooked(false)}
                className="mt-3 px-3 py-1 bg-white text-black rounded text-[9px] font-bold uppercase hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                Edit Reservation
              </button>
            </div>
          ) : null}

          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-100/70 border-b border-neutral-900 pb-1.5 mb-2 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-orange-500" />
            <span>Table Booking Simulator</span>
          </div>

          <form onSubmit={handleBooking} className="space-y-2 text-[10px]">
            <div>
              <label className="block text-neutral-500 mb-0.5">Gourmet Guests</label>
              <select 
                value={guests} 
                onChange={e => setGuests(parseInt(e.target.value))}
                className="w-full bg-neutral-900 border border-neutral-800 rounded px-2 py-1 text-white outline-none focus:border-orange-500"
              >
                <option value={1}>1 Connoisseur</option>
                <option value={2}>2 Connoisseurs</option>
                <option value={4}>4 Connoisseurs</option>
                <option value={6}>Private Lounge (6+)</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-neutral-500 mb-0.5">Select Date</label>
                <input 
                  type="date" 
                  value={bookingDate}
                  onChange={e => setBookingDate(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded px-2 py-1 text-white outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-neutral-500 mb-0.5">Select Hour</label>
                <input 
                  type="time" 
                  value={bookingTime}
                  onChange={e => setBookingTime(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded px-2 py-1 text-white outline-none focus:border-orange-500"
                />
              </div>
            </div>
            <button 
              type="submit" 
              className="w-full mt-2 py-2 bg-orange-500 hover:bg-orange-600 rounded text-black font-extrabold tracking-wide transition-all uppercase cursor-pointer"
            >
              Secure Experience
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


// ==========================================
// 4. FITNESS WEBSITE MOCKUP (Vanguard Fit)
// ==========================================
export function FitnessMockup() {
  const [isTraining, setIsTraining] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(482);
  const [heartRate, setHeartRate] = useState(82);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTraining) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev + 1);
        setCaloriesBurned(prev => prev + Math.floor(Math.random() * 2));
        setHeartRate(() => 120 + Math.floor(Math.sin(Date.now() / 5000) * 15));
      }, 1000);
    } else {
      setHeartRate(82);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTraining]);

  const formatTime = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggleTraining = () => {
    if (isTraining) {
      setIsTraining(false);
    } else {
      setTimerSeconds(0);
      setIsTraining(true);
    }
  };

  return (
    <div className="w-full bg-[#030712] text-neutral-200 p-4 md:p-6 rounded-2xl font-sans text-xs h-full flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-4">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="font-extrabold text-sm tracking-tight text-white uppercase">VANGUARD <span className="text-emerald-400">FIT</span></span>
        </div>
        <span className="text-[8px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
          HEALTH SYNCED
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        {/* HR Metrics Card */}
        <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-1 right-2 font-mono text-[8px] text-rose-500">BPM</div>
          <div className="text-[10px] text-neutral-400 uppercase font-semibold">Pulse Rate</div>
          <div className="text-2xl font-black text-white mt-1 flex items-baseline gap-1">
            <span className={isTraining ? 'animate-pulse text-rose-500' : 'text-white'}>{heartRate}</span>
          </div>
          <div className="h-6 flex items-end gap-0.5 mt-2 overflow-hidden">
            {Array.from({ length: 15 }).map((_, i) => {
              const h = isTraining ? (30 + Math.floor(Math.sin(i * 1.5 + Date.now() / 1000) * 15)) : 10;
              return (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t transition-all duration-300 ${isTraining ? 'bg-rose-500' : 'bg-neutral-800'}`} 
                  style={{ height: `${h}%` }} 
                />
              );
            })}
          </div>
        </div>

        {/* Calories Meter */}
        <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-1 right-2 font-mono text-[8px] text-emerald-400">KCAL</div>
          <div className="text-[10px] text-neutral-400 uppercase font-semibold">Active Burn</div>
          <div className="text-2xl font-black text-white mt-1">
            {caloriesBurned}
          </div>
          <div className="mt-3 text-[8px] text-neutral-500">
            Target: <span className="font-semibold text-neutral-300">800 KCAL</span>
          </div>
          <div className="w-full h-1 bg-neutral-950 rounded-full overflow-hidden mt-1">
            <div 
              className="h-full bg-emerald-400 transition-all duration-300"
              style={{ width: `${Math.min((caloriesBurned / 800) * 100, 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Interactive Training Controller */}
      <div className="bg-neutral-900/30 border border-neutral-900 rounded-xl p-4 flex flex-col items-center justify-center text-center">
        {isTraining ? (
          <div className="space-y-1 mb-2">
            <div className="text-2xl font-mono font-black text-white tracking-widest">{formatTime(timerSeconds)}</div>
            <div className="text-[9px] text-emerald-400 font-bold uppercase animate-pulse">Cardio Endurance Drill Running</div>
          </div>
        ) : (
          <div className="space-y-1 mb-2">
            <div className="text-lg font-bold text-white">Interactive Gym Sim</div>
            <p className="text-[9px] text-neutral-500">Initiate a mock high-intensity exercise set to test heart telemetry.</p>
          </div>
        )}

        <button
          onClick={handleToggleTraining}
          className={`px-4 py-2 rounded-full font-bold uppercase text-[9px] tracking-wider flex items-center gap-1.5 cursor-pointer transition-all ${
            isTraining 
              ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-[0_0_15px_rgba(225,29,72,0.3)]' 
              : 'bg-emerald-400 hover:bg-emerald-500 text-neutral-950 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
          }`}
        >
          {isTraining ? (
            <>
              <RotateCcw className="w-3 h-3" />
              <span>Halt Set</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-current" />
              <span>Commence Exercise Set</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}


// ==========================================
// 5. LANDING PAGE MOCKUP (SyncFlow App)
// ==========================================
export function LandingMockup() {
  const [isYearly, setIsYearly] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const pricing = {
    monthly: { starter: 19, professional: 49 },
    yearly: { starter: 14, professional: 39 },
  };

  const currentPricing = isYearly ? pricing.yearly : pricing.monthly;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <div className="w-full bg-[#050508] text-neutral-300 p-4 md:p-6 rounded-2xl font-sans text-xs h-full flex flex-col justify-between">
      {/* Top Brand Info */}
      <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-4">
        <span className="font-extrabold text-sm text-white tracking-tight flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 shrink-0" />
          Sync<span className="text-yellow-400">Flow</span>
        </span>
        <span className="text-[8px] uppercase tracking-widest font-bold text-neutral-500">SaaS Launch Sandbox</span>
      </div>

      {/* Hero Headline Section */}
      <div className="text-center max-w-sm mx-auto mb-4">
        <h4 className="text-sm md:text-base font-extrabold text-white tracking-tight leading-tight">
          Synchronize Your Workflows without writing any configurations.
        </h4>
        <p className="text-[9px] text-neutral-400 mt-1">One dashboard to secure, catalog, and trace API payload parameters.</p>
      </div>

      {/* Segment Pricing Toggle */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className={`text-[9px] ${!isYearly ? 'text-white font-bold' : 'text-neutral-500'}`}>Monthly</span>
        <button 
          onClick={() => setIsYearly(!isYearly)}
          className="w-8 h-4 rounded-full bg-neutral-900 border border-neutral-800 p-0.5 transition-colors focus:outline-none cursor-pointer"
        >
          <div className={`w-2.5 h-2.5 rounded-full bg-yellow-400 transition-all ${isYearly ? 'translate-x-4' : 'translate-x-0'}`} />
        </button>
        <span className={`text-[9px] flex items-center gap-1 ${isYearly ? 'text-white font-bold' : 'text-neutral-500'}`}>
          Yearly <span className="text-[8px] bg-yellow-400/20 text-yellow-400 px-1 rounded font-bold">SAVE 20%</span>
        </span>
      </div>

      {/* Two Mini Pricing Cards */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="p-3 bg-neutral-900/50 border border-neutral-800/80 rounded-xl relative flex flex-col justify-between">
          <div>
            <div className="text-[9px] text-neutral-400 font-bold">Starter</div>
            <div className="text-xl font-black text-white mt-1">
              ${currentPricing.starter}<span className="text-[10px] text-neutral-500 font-normal">/mo</span>
            </div>
          </div>
          <ul className="space-y-1 text-[8px] text-neutral-400 mt-2.5">
            <li className="flex items-center gap-1">✓ 5 Synced Pipelines</li>
            <li className="flex items-center gap-1">✓ 24h Metrics Archive</li>
          </ul>
        </div>

        <div className="p-3 bg-neutral-900/50 border border-yellow-500/30 rounded-xl relative flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 px-1 bg-yellow-400 text-neutral-950 font-bold text-[7px] uppercase tracking-wide rounded-bl">PRO</div>
          <div>
            <div className="text-[9px] text-neutral-400 font-bold">Professional</div>
            <div className="text-xl font-black text-white mt-1">
              ${currentPricing.professional}<span className="text-[10px] text-neutral-500 font-normal">/mo</span>
            </div>
          </div>
          <ul className="space-y-1 text-[8px] text-neutral-400 mt-2.5">
            <li className="flex items-center gap-1 text-yellow-400/80">✓ Infinite Pipelines</li>
            <li className="flex items-center gap-1">✓ Live API Grounding</li>
          </ul>
        </div>
      </div>

      {/* Newsletter Signup Area */}
      <div className="bg-neutral-900/30 border border-neutral-900 p-3 rounded-xl relative overflow-hidden">
        {subscribed ? (
          <div className="text-center py-2 text-yellow-400 font-bold animate-pulse text-[10px]">
            Thank You! Pipeline Key dispatched to {email}.
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-1.5">
            <input 
              type="email" 
              placeholder="Inject your developer email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 rounded px-2 py-1.5 text-white flex-1 outline-none text-[9px] focus:border-yellow-400"
              required
            />
            <button 
              type="submit" 
              className="bg-yellow-400 hover:bg-yellow-500 text-neutral-950 font-bold px-3 rounded uppercase text-[9px] tracking-wide transition-colors cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}


// ==========================================
// 6. CUSTOM DESIGN (Abstract Canvas / Generative Art)
// ==========================================
export function CustomMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; color: string }[]>([]);
  const [clicksCount, setClicksCount] = useState(0);

  const colors = [
    'rgba(109,40,217,0.7)', // Purple
    'rgba(236,72,153,0.7)', // Pink
    'rgba(249,115,22,0.7)',  // Orange
    'rgba(16,185,129,0.7)', // Emerald
    'rgba(250,204,21,0.7)', // Yellow
  ];

  const handleArtCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setClicksCount(prev => prev + 1);

    // Spawn 8 exploding glowing particle circles around the click coordinate
    const newParticles = Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * Math.PI * 2) / 8;
      const dist = 25 + Math.random() * 25;
      return {
        id: Date.now() + i,
        x: x + Math.cos(angle) * dist,
        y: y + Math.sin(angle) * dist,
        size: 6 + Math.random() * 12,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    });

    setParticles(prev => [...prev.slice(-30), ...newParticles]); // keep max 30 items
  };

  const handleClearCanvas = () => {
    setParticles([]);
    setClicksCount(0);
  };

  return (
    <div className="w-full bg-neutral-950 text-white p-4 md:p-6 rounded-2xl font-sans text-xs h-full flex flex-col justify-between">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-neutral-900 pb-3 mb-3">
        <div>
          <span className="font-extrabold text-sm tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 uppercase">PRISMART</span>
          <p className="text-[8px] text-neutral-500 uppercase tracking-wider font-mono">Bespoke Generative Canvas</p>
        </div>
        <button 
          onClick={handleClearCanvas}
          className="px-2 py-1 bg-neutral-900 border border-neutral-800 hover:text-white rounded text-[8px] font-bold text-neutral-400 uppercase transition-colors cursor-pointer"
        >
          Reset Space
        </button>
      </div>

      {/* Generative Canvas Space */}
      <div 
        ref={containerRef}
        onClick={handleArtCanvasClick}
        className="relative flex-1 min-h-[140px] bg-neutral-900/40 rounded-xl border border-neutral-900 overflow-hidden cursor-crosshair flex flex-col items-center justify-center text-center p-4 hover:border-purple-500/25 transition-all duration-300 shadow-inner"
      >
        {particles.length === 0 ? (
          <div className="space-y-1.5 pointer-events-none">
            <Sparkles className="w-5 h-5 text-pink-400 mx-auto animate-bounce" />
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Interactive WebGL Emulator</div>
            <p className="text-[8px] text-neutral-600 max-w-[180px] mx-auto leading-relaxed">Click inside this boundary area to generate vector glowing elements in real-time.</p>
          </div>
        ) : null}

        {/* Render interactive vector particles */}
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full pointer-events-none transition-all duration-700 ease-out animate-ping"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color,
              boxShadow: `0 0 15px ${p.color}`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}

        {/* Counter stat in corner */}
        <div className="absolute bottom-2 right-3 font-mono text-[8px] text-neutral-600 pointer-events-none">
          Active Nodes: <span className="text-purple-400 font-bold">{particles.length}</span> | Energy Click: <span className="text-pink-400 font-bold">{clicksCount}</span>
        </div>
      </div>

      {/* Footer descriptor */}
      <div className="mt-3 pt-2.5 border-t border-neutral-900 flex items-center justify-between text-neutral-500 text-[9px]">
        <span>Powered by Canvas React-state</span>
        <span className="text-[8px] uppercase tracking-wider text-pink-500/80 font-bold">100% Client Interactive</span>
      </div>
    </div>
  );
}

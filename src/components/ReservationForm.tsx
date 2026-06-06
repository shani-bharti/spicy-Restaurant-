import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CalendarDays, Users, Flame, Clock, Armchair, CheckCircle, Ticket, Phone, Mail, User, PhoneCall } from 'lucide-react';
import { ReservationDetails } from '../types';

export default function ReservationForm() {
  const [activeTab, setActiveTab] = useState<'book' | 'view'>('book');
  const [existingBookings, setExistingBookings] = useState<ReservationDetails[]>([]);

  // Form states
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState(4);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [seatingArea, setSeatingArea] = useState<'family' | 'ac-hall' | 'outdoor' | 'any'>('family');
  const [specialRequests, setSpecialRequests] = useState('');

  const [bookingResponse, setBookingResponse] = useState<ReservationDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Sync existing bookings from client state/localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('spicy_reservations');
      if (saved) {
        setExistingBookings(JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Storage syncing failed", e);
    }
  }, []);

  const handleBooking = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date) return;

    setIsLoading(true);

    setTimeout(() => {
      const newBooking: ReservationDetails = {
        id: `SPICY-RES-${Math.floor(100000 + Math.random() * 900000)}`,
        name,
        phone,
        email,
        guests,
        date,
        time,
        seatingArea,
        specialRequests,
      };

      try {
        const nextBookings = [newBooking, ...existingBookings];
        setExistingBookings(nextBookings);
        localStorage.setItem('spicy_reservations', JSON.stringify(nextBookings));
      } catch (err) {
        console.warn("Saving to disk failed", err);
      }

      setBookingResponse(newBooking);
      setIsLoading(false);

      // Clean inputs
      setName('');
      setPhone('');
      setEmail('');
      setGuests(4);
      setDate('');
      setSpecialRequests('');
    }, 1500);
  };

  const getSeatingLabel = (area: string) => {
    switch (area) {
      case 'family':
        return 'Family AC Cabin Section';
      case 'ac-hall':
        return 'Royal AC Main Hall';
      case 'outdoor':
        return 'Open Air Highway Patio';
      default:
        return 'Any Seating Preference';
    }
  };

  // WhatsApp template for immediate ticket booking ping
  const getWhatsAppReceipt = (bk: ReservationDetails) => {
    const formattedMeta =
      `*Spicy Family Restaurant Reservation Verified*\n\n` +
      `*Receipt ID:* ${bk.id}\n` +
      `*Guest Name:* ${bk.name}\n` +
      `*Co-Group size:* ${bk.guests} Guests\n` +
      `*Date & Time:* ${bk.date} @ ${bk.time}\n` +
      `*Arrangement:* ${getSeatingLabel(bk.seatingArea)}\n` +
      `*Special Notes:* ${bk.specialRequests || 'None'}\n\n` +
      `Verify the ticket availability now at Mutangi. Thank you for booking!`;
    return `https://wa.me/919177235000?text=${encodeURIComponent(formattedMeta)}`;
  };

  return (
    <section id="reserve" className="py-24 bg-zinc-50 dark:bg-zinc-900/60 relative overflow-hidden transition-colors">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-on-scroll">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-red-650 dark:text-amber-500">
            Secure Seating
          </span>
          <h2 className="mt-3 font-sans text-3xl font-black tracking-tight sm:text-4xl text-zinc-900 dark:text-white">
            Reserve Your Culinary Table
          </h2>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-red-650 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Tab Selection */}
        <div className="flex items-center justify-center space-x-2 mb-10">
          <button
            id="tab-reserve-book"
            onClick={() => {
              setActiveTab('book');
              setBookingResponse(null);
            }}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
              activeTab === 'book'
                ? 'bg-zinc-900 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm'
                : 'bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 rounded-xl'
            }`}
          >
            New Reservation
          </button>
          <button
            id="tab-reserve-list"
            onClick={() => setActiveTab('view')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer relative ${
              activeTab === 'view'
                ? 'bg-zinc-900 text-white dark:bg-amber-500 dark:text-zinc-950 shadow-sm'
                : 'bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-500 rounded-xl'
            }`}
          >
            My Active Tickets
            {existingBookings.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 h-4 w-4 bg-red-650 text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow">
                {existingBookings.length}
              </span>
            )}
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'book' ? (
              <motion.div
                key="booking-form-wrap"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {bookingResponse ? (
                  /* Digitized Success Ticket Show */
                  <div
                    id="reservation-success-ticket"
                    className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 rounded-3xl overflow-hidden p-6 sm:p-10 shadow-xl max-w-xl mx-auto text-center relative"
                  >
                    {/* Ticket Header */}
                    <div className="flex flex-col items-center justify-center mb-6">
                      <div className="h-14 w-14 rounded-full bg-emerald-500/15 flex items-center justify-center mb-3">
                        <CheckCircle className="h-8 w-8 text-emerald-500" />
                      </div>
                      <h3 className="font-sans text-xl font-bold text-zinc-900 dark:text-white">
                        Your Seating Reservation is Confirmed!
                      </h3>
                      <p className="font-sans text-xs text-zinc-550 dark:text-zinc-400 mt-1 max-w-xs leading-relaxed">
                        A table has been requested under your name. Please save this digital ticket stub.
                      </p>
                    </div>

                    <div className="border-t border-b border-dashed border-zinc-200 dark:border-zinc-800 py-6 my-6 text-left space-y-4 font-sans relative">
                      {/* Ticket notches decoration */}
                      <div className="absolute -left-13 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800" />
                      <div className="absolute -right-13 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-zinc-50 dark:bg-zinc-900 border-l border-zinc-200 dark:border-zinc-800" />

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Receipt ID
                          </p>
                          <p className="text-sm font-mono text-zinc-805 dark:text-zinc-200 font-bold">
                            {bookingResponse.id}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Dine-In Guest
                          </p>
                          <p className="text-sm font-bold text-zinc-805 dark:text-zinc-200">
                            {bookingResponse.name}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Date & Arrival
                          </p>
                          <p className="text-sm font-bold text-zinc-805 dark:text-zinc-205 flex items-center space-x-1">
                            <CalendarDays className="h-3.5 w-3.5 text-red-500" />
                            <span>{bookingResponse.date}</span>
                            <span className="text-zinc-400">@</span>
                            <span>{bookingResponse.time}</span>
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Table Arrangements
                          </p>
                          <p className="text-sm font-bold text-zinc-805 dark:text-zinc-205">
                            {getSeatingLabel(bookingResponse.seatingArea)}
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            Guests Limit
                          </p>
                          <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
                            {bookingResponse.guests} Chairs Requested
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                            In-File Contacts
                          </p>
                          <p className="text-xs text-zinc-700 dark:text-zinc-300">
                            {bookingResponse.phone}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={getWhatsAppReceipt(bookingResponse)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 w-full rounded-2xl bg-emerald-600 text-white font-bold py-3.5 hover:bg-emerald-500 transition-all text-sm shadow-md"
                      >
                        <Ticket className="h-4.5 w-4.5" />
                        <span>Send Ticket to WhatsApp</span>
                      </a>
                      <button
                        id="new-booking-reset-btn"
                        onClick={() => setBookingResponse(null)}
                        className="w-full text-xs font-bold uppercase tracking-wider text-zinc-450 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer"
                      >
                        Book another table
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Main Interactive Form Grid */
                  <form
                    onSubmit={handleBooking}
                    className="bg-white dark:bg-zinc-950 p-6 sm:p-10 rounded-3xl border border-zinc-200/60 dark:border-zinc-800 shadow-xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name fields */}
                      <div className="relative">
                        <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-2 uppercase">
                          Full Name
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400">
                            <User className="h-4 w-4" />
                          </span>
                          <input
                            id="res-name-input"
                            type="text"
                            required
                            placeholder="Ramesh Reddy"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-3 pl-11 pr-4 text-sm text-zinc-800 outline-none transition-all focus:border-red-500 focus:ring-1 focus:ring-red-505 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                          />
                        </div>
                      </div>

                      {/* Phone fields */}
                      <div className="relative">
                        <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-2 uppercase">
                          Contact Phone
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400">
                            <Phone className="h-4 w-4" />
                          </span>
                          <input
                            id="res-phone-input"
                            type="tel"
                            required
                            placeholder="+91 XXXXX XXXXX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-3 pl-11 pr-4 text-sm text-zinc-800 outline-none transition-all focus:border-red-500 focus:ring-1 focus:ring-red-505 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                          />
                        </div>
                      </div>

                      {/* Email fields */}
                      <div className="relative">
                        <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-2 uppercase">
                          Email Address (Optional)
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400">
                            <Mail className="h-4 w-4" />
                          </span>
                          <input
                            id="res-email-input"
                            type="email"
                            placeholder="ramesh@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-3 pl-11 pr-4 text-sm text-zinc-800 outline-none transition-all focus:border-red-500 focus:ring-1 focus:ring-red-505 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                          />
                        </div>
                      </div>

                      {/* Seat selection */}
                      <div className="relative">
                        <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-2 uppercase">
                          Seating Cabin Option
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400">
                            <Armchair className="h-4 w-4" />
                          </span>
                          <select
                            id="res-area-select"
                            value={seatingArea}
                            onChange={(e) => setSeatingArea(e.target.value as any)}
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-3 pl-11 pr-4 text-sm text-zinc-800 outline-none transition-all focus:border-red-500 focus:ring-1 focus:ring-red-505 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                          >
                            <option value="family">{getSeatingLabel('family')}</option>
                            <option value="ac-hall">{getSeatingLabel('ac-hall')}</option>
                            <option value="outdoor">{getSeatingLabel('outdoor')}</option>
                            <option value="any">{getSeatingLabel('any')}</option>
                          </select>
                        </div>
                      </div>

                      {/* Guest picker */}
                      <div className="relative">
                        <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-2 uppercase">
                          Co-group size (Guests Limit)
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-400">
                            <Users className="h-4 w-4" />
                          </span>
                          <input
                            id="res-guests-input"
                            type="number"
                            required
                            min={1}
                            max={30}
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-3 pl-11 pr-4 text-sm text-zinc-800 outline-none transition-all focus:border-red-500 focus:ring-1 focus:ring-red-505 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                          />
                        </div>
                      </div>

                      {/* Dates and time controls */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-2 uppercase">
                            Arrival Date
                          </label>
                          <input
                            id="res-date-input"
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 px-3 text-sm text-zinc-800 outline-none transition-all focus:border-red-505 focus:ring-1 focus:ring-red-505 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-2 uppercase">
                            Arrival Time
                          </label>
                          <input
                            id="res-time-input"
                            type="time"
                            required
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-2.5 px-3 text-sm text-zinc-800 outline-none transition-all focus:border-red-505 focus:ring-1 focus:ring-red-505 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                          />
                        </div>
                      </div>

                      {/* Custom instructions text areas */}
                      <div className="md:col-span-2">
                        <label className="block text-xs font-bold text-zinc-550 dark:text-zinc-400 mb-2 uppercase">
                          Special Requirements / Surcharge arrangements
                        </label>
                        <textarea
                          id="res-notes-input"
                          rows={3}
                          placeholder="e.g. Baby high chair, spice-free dishes, birthday decorations..."
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="w-full rounded-xl border border-zinc-200 bg-zinc-50/50 py-3 px-4 text-sm text-zinc-800 outline-none transition-all focus:border-red-500 focus:ring-1 focus:ring-red-505 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
                        />
                      </div>
                    </div>

                    <div className="mt-8 border-t border-zinc-100 dark:border-zinc-850 pt-6">
                      <button
                        id="submit-res-form-btn"
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center space-x-2 w-full rounded-2xl bg-gradient-to-r from-red-650 via-orange-600 to-amber-500 py-4 text-sm font-bold text-white shadow-lg cursor-pointer hover:shadow-xl disabled:opacity-50 transition-all uppercase tracking-wide"
                      >
                        {isLoading ? (
                          <>
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            <span>Assigning Table Cabin...</span>
                          </>
                        ) : (
                          <>
                            <CalendarDays className="h-4.5 w-4.5" />
                            <span>Book Table Seat Now</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            ) : (
              /* View Existing Bookings Tab */
              <motion.div
                key="bookings-history-wrap"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {existingBookings.length === 0 ? (
                  <div className="text-center py-16 bg-white dark:bg-zinc-950 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800">
                    <p className="text-sm font-semibold text-zinc-500">
                      No matching reservations found on this device.
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">
                      Complete the booking form on the other tab to register a new table.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {existingBookings.map((bk) => (
                      <div
                        key={bk.id}
                        id={`inactive-ticket-${bk.id}`}
                        className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4 border-b border-dashed border-zinc-100 dark:border-zinc-850 pb-3">
                            <span className="font-mono text-xs font-black text-amber-500 uppercase">
                              {bk.id}
                            </span>
                            <span className="inline-flex items-center text-[10px] uppercase font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded">
                              Confirmed
                            </span>
                          </div>

                          <h4 className="font-sans text-base font-bold text-zinc-905 dark:text-zinc-100">
                            {bk.name}
                          </h4>

                          <div className="space-y-2 mt-3 font-sans text-xs text-zinc-550 dark:text-zinc-400">
                            <p className="flex items-center gap-1.5">
                              <CalendarDays className="h-3.5 w-3.5 text-zinc-400" />
                              <span>
                                {bk.date} @ {bk.time}
                              </span>
                            </p>
                            <p className="flex items-center gap-1.5">
                              <Users className="h-3.5 w-3.5 text-zinc-400" />
                              <span>{bk.guests} Guests limit</span>
                            </p>
                            <p className="flex items-center gap-1.5">
                              <Armchair className="h-3.5 w-3.5 text-zinc-400" />
                              <span>{getSeatingLabel(bk.seatingArea)}</span>
                            </p>
                          </div>
                        </div>

                        <a
                          href={getWhatsAppReceipt(bk)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 flex items-center justify-center space-x-2 w-full rounded-xl bg-emerald-600 text-white font-bold py-2.5 hover:bg-emerald-500 transition-all text-xs"
                        >
                          <PhoneCall className="h-3.5 w-3.5" />
                          <span>Push Ticket Confirmation</span>
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

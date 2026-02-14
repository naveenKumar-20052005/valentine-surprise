// import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'

// // ═══════════════════════════════════════
// // FLOATING HEARTS BACKGROUND
// // ═══════════════════════════════════════
// const HEART_EMOJIS = [
//   '❤️','💕','💖','💗','💘','💝','💞','💓','💟','🌹',
//   '✨','🦋','💐','🥀','💋','🌸','🌺','🏵️','💮','🪷',
//   '⭐','🌟','💫','🪄','🎀','🎈','🧸','🍫','💎','👑'
// ]

// function FloatingHearts() {
//   const items = useMemo(() => {
//     const arr = []
//     for (let i = 0; i < 35; i++) {
//       arr.push({
//         id: i,
//         emoji: HEART_EMOJIS[i % HEART_EMOJIS.length],
//         left: Math.random() * 100,
//         delay: Math.random() * 15,
//         duration: 8 + Math.random() * 14,
//         size: 14 + Math.random() * 26
//       })
//     }
//     return arr
//   }, [])

//   return (
//     <div className="floating-hearts" aria-hidden="true">
//       {items.map((h) => (
//         <span
//           key={h.id}
//           className="heart-float"
//           style={{
//             left: h.left + '%',
//             animationDelay: h.delay + 's',
//             animationDuration: h.duration + 's',
//             fontSize: h.size + 'px'
//           }}
//         >
//           {h.emoji}
//         </span>
//       ))}
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // SPARKLE CURSOR TRAIL
// // ═══════════════════════════════════════
// const SPARKLE_EMOJIS = ['✨','💖','⭐','💕','🌟','💗','🦋','💫','🌸','💎']

// function SparkleTrail() {
//   const [sparkles, setSparkles] = useState([])
//   const throttleRef = useRef(0)

//   useEffect(() => {
//     function handleMove(e) {
//       const now = Date.now()
//       if (now - throttleRef.current < 80) return
//       throttleRef.current = now

//       const s = {
//         id: now + Math.random(),
//         x: e.clientX || (e.touches?.[0]?.clientX || 0),
//         y: e.clientY || (e.touches?.[0]?.clientY || 0),
//         emoji: SPARKLE_EMOJIS[Math.floor(Math.random() * SPARKLE_EMOJIS.length)]
//       }
//       setSparkles((prev) => [...prev.slice(-12), s])
//     }

//     window.addEventListener('mousemove', handleMove, { passive: true })
//     window.addEventListener('touchmove', handleMove, { passive: true })
//     return () => {
//       window.removeEventListener('mousemove', handleMove)
//       window.removeEventListener('touchmove', handleMove)
//     }
//   }, [])

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSparkles((prev) => prev.slice(1))
//     }, 400)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <>
//       {sparkles.map((s) => (
//         <span key={s.id} className="sparkle-trail" style={{ left: s.x + 'px', top: s.y + 'px' }} aria-hidden="true">
//           {s.emoji}
//         </span>
//       ))}
//     </>
//   )
// }

// // ═══════════════════════════════════════
// // EMOJI RAIN
// // ═══════════════════════════════════════
// function EmojiRain({ emojis }) {
//   if (!emojis.length) return null
//   return (
//     <div className="emoji-rain" aria-hidden="true">
//       {emojis.map((e) => (
//         <span key={e.id} className="rain-emoji" style={{
//           left: e.x + '%',
//           animationDuration: (1.5 + Math.random() * 2.5) + 's',
//           fontSize: (18 + Math.random() * 24) + 'px',
//           animationDelay: (Math.random() * 0.5) + 's'
//         }}>
//           {e.emoji}
//         </span>
//       ))}
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // FIREWORKS
// // ═══════════════════════════════════════
// const FIREWORK_EMOJIS = ['🎆','🎇','✨','💥','🌟','⭐','🎉','🎊','💫','🔥']

// function Fireworks({ active }) {
//   const items = useMemo(() => {
//     if (!active) return []
//     const arr = []
//     for (let i = 0; i < 25; i++) {
//       arr.push({
//         id: i,
//         emoji: FIREWORK_EMOJIS[i % FIREWORK_EMOJIS.length],
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         delay: Math.random() * 2.5,
//         size: 18 + Math.random() * 45
//       })
//     }
//     return arr
//   }, [active])

//   if (!active) return null

//   return (
//     <div className="fireworks" aria-hidden="true">
//       {items.map((f) => (
//         <span key={f.id} className="firework" style={{
//           left: f.x + '%', top: f.y + '%',
//           animationDelay: f.delay + 's', fontSize: f.size + 'px'
//         }}>
//           {f.emoji}
//         </span>
//       ))}
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // CONFETTI BURST
// // ═══════════════════════════════════════
// const CONFETTI_COLORS = ['#ff6b9d','#f9ca24','#e74c3c','#a55eea','#00d2d3','#ff9ff3','#54a0ff','#5f27cd']

// function ConfettiBurst({ active }) {
//   const items = useMemo(() => {
//     if (!active) return []
//     const arr = []
//     for (let i = 0; i < 45; i++) {
//       arr.push({
//         id: i,
//         color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
//         left: Math.random() * 100,
//         delay: Math.random() * 1,
//         size: 6 + Math.random() * 10,
//         duration: 2 + Math.random() * 3
//       })
//     }
//     return arr
//   }, [active])

//   if (!active) return null

//   return (
//     <div className="confetti-container" aria-hidden="true">
//       {items.map((c) => (
//         <div key={c.id} className="confetti-piece" style={{
//           left: c.left + '%',
//           backgroundColor: c.color,
//           animationDelay: c.delay + 's',
//           animationDuration: c.duration + 's',
//           width: c.size + 'px',
//           height: c.size * 1.5 + 'px'
//         }} />
//       ))}
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // TOAST NOTIFICATION
// // ═══════════════════════════════════════
// function ToastContainer({ toasts }) {
//   if (!toasts.length) return null
//   return (
//     <div className="toast-container">
//       {toasts.map((t) => (
//         <div key={t.id} className={'toast' + (t.hiding ? ' hiding' : '')}>
//           {t.message}
//         </div>
//       ))}
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // TYPEWRITER
// // ═══════════════════════════════════════
// function TypeWriter({ text, speed = 55 }) {
//   const [displayed, setDisplayed] = useState('')
//   const [index, setIndex] = useState(0)

//   useEffect(() => {
//     setDisplayed('')
//     setIndex(0)
//   }, [text])

//   useEffect(() => {
//     if (index < text.length) {
//       const timer = setTimeout(() => {
//         setDisplayed((p) => p + text[index])
//         setIndex((i) => i + 1)
//       }, speed)
//       return () => clearTimeout(timer)
//     }
//   }, [index, text, speed])

//   return (
//     <span className="typewriter">
//       {displayed}
//       <span className="cursor-blink">|</span>
//     </span>
//   )
// }

// // ═══════════════════════════════════════
// // LOVE LETTER
// // ═══════════════════════════════════════
// function LoveLetter({ isOpen, onToggle, name }) {
//   return (
//     <div className={'love-letter' + (isOpen ? ' open' : '')} onClick={onToggle} role="button" tabIndex={0}
//       onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onToggle() }}
//       aria-label={isOpen ? 'Close love letter' : 'Open love letter'}>
//       {!isOpen ? (
//         <div className="envelope">
//           <div className="envelope-flap"></div>
//           <div className="envelope-icon">💌</div>
//           <p className="tap-text">💕 Tap to open your love letter! 💕</p>
//           <div className="envelope-hearts">
//             <span>💗</span><span>💖</span><span>💕</span>
//           </div>
//         </div>
//       ) : (
//         <div className="letter-content">
//           <div className="letter-decoration">🌹💕🌹</div>
//           <h3>💌 My Dearest {name || 'Valentine'} 💌</h3>
//           <p>
//             Every moment with you feels like a beautiful dream I never want to
//             wake up from. You are my sunshine ☀️, my moonlight 🌙, and every
//             star ⭐ in my sky.
//           </p>
//           <p>
//             உன் புன்னகை 😊 என் உலகை ஒளிரச் செய்கிறது, உன் சிரிப்பு 😄
//             என் விருப்பமான இசை, உன் அன்பு 💕 நான் பெற்ற மிகப்பெரிய பரிசு.
//           </p>
//           <p>
//             I love you more than words could ever express, more than all the
//             roses 🌹 in the world, and deeper than any ocean 🌊.
//           </p>
//           <p>
//             நீ இல்லாத ஒரு நாளும் எனக்கு வேண்டாம் 💝. நீ என் இதயத்தின்
//             துடிப்பு 💓, என் உயிரின் உயிர் 🦋.
//           </p>
//           <p>
//             You make my heart skip a beat 💓, you give me butterflies 🦋, and
//             you make every day feel like Valentine&#39;s Day 💝. I promise to love
//             you until the stars fall from the sky ⭐🌌.
//           </p>
//           <div className="letter-decoration">✨💖✨</div>
//           <p className="signature">
//             Forever and Always Yours 💝<br />
//             <span>~ என்றென்றும் உன்னவன்/உன்னவள் ~</span><br />
//             <span>~ With All My Love ~</span>
//           </p>
//           <p className="tap-text">💕 Tap to close 💕</p>
//         </div>
//       )}
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // GIFT BOX
// // ═══════════════════════════════════════
// function GiftBox({ gift, index, onOpen }) {
//   const [opened, setOpened] = useState(false)
//   const [animating, setAnimating] = useState(false)

//   function handleClick() {
//     if (!opened && !animating) {
//       setAnimating(true)
//       setTimeout(() => {
//         setOpened(true)
//         setAnimating(false)
//         if (onOpen) onOpen(index)
//       }, 600)
//     }
//   }

//   return (
//     <div
//       className={'gift-box' + (opened ? ' opened' : '') + (animating ? ' shaking' : '')}
//       onClick={handleClick}
//       style={{ animationDelay: (index * 0.1) + 's' }}
//       role="button"
//       tabIndex={0}
//       onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
//       aria-label={opened ? `Gift ${index + 1}: ${gift.message}` : `Open gift ${index + 1}`}
//     >
//       {!opened ? (
//         <>
//           <div className="gift-lid">
//             <div className="gift-bow">🎀</div>
//           </div>
//           <div className="gift-body">{gift.boxEmoji || '🎁'}</div>
//           <p className="gift-label">Gift #{index + 1}</p>
//           <p className="gift-hint">{gift.hint}</p>
//         </>
//       ) : (
//         <div className="gift-reveal">
//           <div className="gift-sparkles">✨✨✨</div>
//           <span className="gift-emoji">{gift.emoji}</span>
//           <p className="gift-message">{gift.message}</p>
//           <p className="gift-tamil">{gift.tamil}</p>
//         </div>
//       )}
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // MUSIC PLAYER
// // ═══════════════════════════════════════
// function MusicPlayer({ songs, currentSong, setCurrent, isPlaying, togglePlay }) {
//   const [liked, setLiked] = useState([])

//   function toggleLike(index) {
//     setLiked((prev) =>
//       prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
//     )
//   }

//   return (
//     <div className="music-player">
//       <h3>🎵 காதல் பாடல்கள் - Love Songs 🎵</h3>

//       <div className="now-playing">
//         <div className="vinyl-record">
//           <span className={'music-disc' + (isPlaying ? ' spinning' : '')}>💿</span>
//           <div className="vinyl-shine"></div>
//         </div>
//         <div className="song-info">
//           <p className="song-title">{songs[currentSong].title}</p>
//           <p className="song-artist">{songs[currentSong].artist}</p>
//           <p className="song-movie">{songs[currentSong].movie}</p>
//           {songs[currentSong].tamil && <p className="song-tamil">{songs[currentSong].tamil}</p>}
//         </div>
//       </div>

//       <div className="music-visualizer" aria-hidden="true">
//         {Array.from({ length: 12 }, (_, i) => (
//           <div key={i} className={'viz-bar' + (isPlaying ? ' active' : '')}
//             style={{ animationDelay: (i * 0.1) + 's' }}
//           />
//         ))}
//       </div>

//       <div className="music-controls">
//         <button className="ctrl-btn" onClick={() => setCurrent((currentSong - 1 + songs.length) % songs.length)}
//           aria-label="Previous song">⏮️</button>
//         <button className="ctrl-btn play-btn" onClick={togglePlay}
//           aria-label={isPlaying ? 'Pause' : 'Play'}>
//           {isPlaying ? '⏸️' : '▶️'}
//         </button>
//         <button className="ctrl-btn" onClick={() => setCurrent((currentSong + 1) % songs.length)}
//           aria-label="Next song">⏭️</button>
//       </div>

//       <div className="playlist" role="list">
//         {songs.map((song, i) => (
//           <div key={i} className={'playlist-item' + (i === currentSong ? ' active' : '')} role="listitem">
//             <div className="playlist-left" onClick={() => setCurrent(i)}>
//               <span className="pl-icon">{i === currentSong && isPlaying ? '🎶' : song.emoji}</span>
//               <div>
//                 <span className="pl-title">{song.title}</span>
//                 <span className="pl-artist">{song.artist}</span>
//               </div>
//             </div>
//             <button className="like-btn" onClick={() => toggleLike(i)}
//               aria-label={liked.includes(i) ? 'Unlike' : 'Like'}>
//               {liked.includes(i) ? '❤️' : '🤍'}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // COUNTDOWN TIMER
// // ═══════════════════════════════════════
// function CountdownTimer() {
//   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//   const [isValentine, setIsValentine] = useState(false)

//   useEffect(() => {
//     function calc() {
//       const now = new Date()
//       const valentine = new Date(now.getFullYear(), 1, 14)

//       // Check if today is Valentine's Day
//       if (now.getMonth() === 1 && now.getDate() === 14) {
//         setIsValentine(true)
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
//         return
//       }

//       setIsValentine(false)
//       if (now > valentine) valentine.setFullYear(valentine.getFullYear() + 1)
//       const diff = valentine - now

//       setTimeLeft({
//         days: Math.floor(diff / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((diff / (1000 * 60)) % 60),
//         seconds: Math.floor((diff / 1000) % 60)
//       })
//     }
//     calc()
//     const timer = setInterval(calc, 1000)
//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="countdown">
//       <h3>💘 Valentine&#39;s Day Countdown 💘</h3>
//       {isValentine ? (
//         <div className="countdown-valentine-msg">
//           <p>🎉💝 Happy Valentine&#39;s Day! 💝🎉</p>
//           <p>இனிய காதலர் தினம்! 🌹</p>
//         </div>
//       ) : (
//         <div className="countdown-boxes">
//           {['days', 'hours', 'minutes', 'seconds'].map((label, idx) => (
//             <div key={label} className="countdown-box" style={{ animationDelay: (idx * 0.2) + 's' }}>
//               <span className="countdown-number">
//                 {String(timeLeft[label]).padStart(2, '0')}
//               </span>
//               <span className="countdown-label">{label}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // WISH CAROUSEL (with swipe support)
// // ═══════════════════════════════════════
// const WISHES = [
//   { emoji: '🌹', text: 'You are the most beautiful soul I know', tamil: 'நீ என் அழகான உலகம் 🌍' },
//   { emoji: '🦋', text: 'My heart skips a beat every time I see you', tamil: 'உன்னை பார்க்கும் போதெல்லாம் என் இதயம் துடிக்கிறது 💓' },
//   { emoji: '🌈', text: 'You color my world with happiness', tamil: 'நீ என் வாழ்வில் மகிழ்ச்சியை நிரப்புகிறாய் 🎨' },
//   { emoji: '🔥', text: 'Our love burns brighter than any fire', tamil: 'நம் காதல் எந்த நெருப்பையும் விட பிரகாசமாக எரிகிறது 🔥' },
//   { emoji: '💎', text: 'You are the most precious gem in my life', tamil: 'நீ என் வாழ்வின் மிக விலைமதிப்பற்ற ரத்தினம் 💎' },
//   { emoji: '🌙', text: 'You are my dream come true', tamil: 'நீ என் கனவு நனவானது 🌙' },
//   { emoji: '🌺', text: 'You bloom beauty in everything', tamil: 'நீ எல்லாவற்றிலும் அழகை மலர வைக்கிறாய் 🌺' },
//   { emoji: '🌊', text: 'My love for you is deeper than any ocean', tamil: 'உன் மீதான என் காதல் எந்த கடலையும் விட ஆழமானது 🌊' },
//   { emoji: '⭐', text: 'You are my guiding star', tamil: 'நீ என் வழிகாட்டும் நட்சத்திரம் ⭐' }
// ]

// function WishCarousel() {
//   const [active, setActive] = useState(0)
//   const touchStartX = useRef(0)

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActive((p) => (p + 1) % WISHES.length)
//     }, 4000)
//     return () => clearInterval(timer)
//   }, [])

//   function handleTouchStart(e) {
//     touchStartX.current = e.touches[0].clientX
//   }

//   function handleTouchEnd(e) {
//     const diff = touchStartX.current - e.changedTouches[0].clientX
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) setActive((p) => (p + 1) % WISHES.length)
//       else setActive((p) => (p - 1 + WISHES.length) % WISHES.length)
//     }
//   }

//   return (
//     <div className="wish-carousel">
//       <h3>💌 Love Wishes / காதல் வாழ்த்துகள் 💌</h3>
//       <div className="wish-card" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
//         <span className="wish-emoji">{WISHES[active].emoji}</span>
//         <p className="wish-text">{WISHES[active].text}</p>
//         <p className="wish-tamil">{WISHES[active].tamil}</p>
//       </div>
//       <div className="wish-dots">
//         {WISHES.map((_, i) => (
//           <button key={i} className={'dot' + (i === active ? ' active' : '')}
//             onClick={() => setActive(i)} aria-label={`Wish ${i + 1}`} />
//         ))}
//       </div>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // LOVE QUIZ
// // ═══════════════════════════════════════
// const QUIZ_QUESTIONS = [
//   { q: 'What does 💝 mean?', options: ['Gift Heart', 'Broken Heart', 'Blue Heart'], answer: 0 },
//   { q: 'காதலர் தினம் எந்த மாதம்?', options: ['January', 'February', 'March'], answer: 1 },
//   { q: 'How many roses in a traditional bouquet?', options: ['6', '12', '24'], answer: 1 },
//   { q: 'Who is the Greek god of love?', options: ['Zeus', 'Eros', 'Apollo'], answer: 1 },
//   { q: 'Tamil cinema love king?', options: ['Vijay', 'Dhanush', 'Suriya'], answer: 1 },
//   { q: 'Which bird symbolizes love?', options: ['Eagle', 'Dove', 'Parrot'], answer: 1 },
//   { q: '"Uyire Uyire" is from which movie?', options: ['Bombay', 'Roja', 'Dil Se'], answer: 0 },
//   { q: 'What color represents Valentine\'s Day?', options: ['Blue', 'Green', 'Red'], answer: 2 }
// ]

// function LoveQuiz({ onComplete }) {
//   const [step, setStep] = useState(0)
//   const [score, setScore] = useState(0)
//   const [done, setDone] = useState(false)
//   const [selected, setSelected] = useState(-1)
//   const [showAnswer, setShowAnswer] = useState(false)

//   function handleAnswer(idx) {
//     if (showAnswer) return
//     setSelected(idx)
//     setShowAnswer(true)
//     if (idx === QUIZ_QUESTIONS[step].answer) setScore((s) => s + 1)
//     setTimeout(() => {
//       setShowAnswer(false)
//       setSelected(-1)
//       if (step < QUIZ_QUESTIONS.length - 1) setStep((s) => s + 1)
//       else {
//         setDone(true)
//         if (onComplete) onComplete()
//       }
//     }, 1200)
//   }

//   function reset() {
//     setStep(0)
//     setScore(0)
//     setDone(false)
//     setSelected(-1)
//     setShowAnswer(false)
//   }

//   if (done) {
//     const emoji = score === QUIZ_QUESTIONS.length ? '🏆' : score >= 5 ? '🎉' : score >= 3 ? '😊' : '💗'
//     const msg = score === QUIZ_QUESTIONS.length ? '🎉 Perfect! You are a LOVE EXPERT! 💘' :
//       score >= 5 ? '😊 Great job! Love is in the air! 💕' :
//       score >= 3 ? '💗 Good try! Keep the love going! 🌹' :
//       '💕 Love is a journey, keep learning! 🦋'

//     return (
//       <div className="quiz-result">
//         <span className="result-emoji">{emoji}</span>
//         <h3>💕 Quiz Complete! 💕</h3>
//         <p className="quiz-score">{score}/{QUIZ_QUESTIONS.length}</p>
//         <p className="result-msg">{msg}</p>
//         <button className="btn-glow" onClick={reset}>Try Again 🔄</button>
//       </div>
//     )
//   }

//   return (
//     <div className="love-quiz">
//       <h3>💕 Love Quiz / காதல் வினாடி வினா 💕</h3>
//       <div className="quiz-progress-bar">
//         <div className="quiz-progress-fill" style={{ width: ((step + 1) / QUIZ_QUESTIONS.length * 100) + '%' }} />
//       </div>
//       <p className="quiz-progress">Question {step + 1} of {QUIZ_QUESTIONS.length}</p>
//       <p className="quiz-question">{QUIZ_QUESTIONS[step].q}</p>
//       <div className="quiz-options">
//         {QUIZ_QUESTIONS[step].options.map((opt, i) => {
//           let cls = 'quiz-btn'
//           if (showAnswer) {
//             if (i === QUIZ_QUESTIONS[step].answer) cls += ' correct'
//             else if (i === selected) cls += ' wrong'
//           }
//           return (
//             <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={showAnswer}>
//               {opt}
//             </button>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // LOVE PROMISES
// // ═══════════════════════════════════════
// const PROMISES = [
//   { emoji: '🤗', text: 'I promise to hug you every single day', tamil: 'தினமும் உன்னை கட்டி அணைப்பேன்' },
//   { emoji: '👂', text: 'I promise to always listen to you', tamil: 'எப்போதும் உன் பேச்சை கேட்பேன்' },
//   { emoji: '😂', text: 'I promise to make you laugh', tamil: 'உன்னை சிரிக்க வைப்பேன்' },
//   { emoji: '🍳', text: 'I promise to cook your favorite meals', tamil: 'உனக்கு பிடித்த உணவு சமைப்பேன்' },
//   { emoji: '🌙', text: 'I promise to say goodnight every night', tamil: 'தினமும் இனிய இரவு சொல்வேன்' },
//   { emoji: '☀️', text: 'I promise to be your sunshine', tamil: 'உன் வாழ்வின் சூரிய ஒளியாக இருப்பேன்' },
//   { emoji: '💪', text: 'I promise to always be your strength', tamil: 'எப்போதும் உன் பலமாக இருப்பேன்' },
//   { emoji: '🛡️', text: 'I promise to protect your heart', tamil: 'உன் இதயத்தை காப்பேன்' },
//   { emoji: '🌍', text: 'I promise to explore the world with you', tamil: 'உன்னுடன் உலகை சுற்றுவேன்' },
//   { emoji: '💃', text: 'I promise to dance with you in the rain', tamil: 'மழையில் உன்னுடன் நடனமாடுவேன்' },
//   { emoji: '📱', text: 'I promise to never ignore your calls', tamil: 'உன் அழைப்பை ஒருபோதும் புறக்கணிக்க மாட்டேன்' },
//   { emoji: '🎂', text: 'I promise to make every birthday special', tamil: 'ஒவ்வொரு பிறந்தநாளையும் சிறப்பாக்குவேன்' }
// ]

// function LovePromises() {
//   return (
//     <div className="promises-section">
//       <h3>🤞 My Promises / என் வாக்குறுதிகள் 🤞</h3>
//       <div className="promises-grid">
//         {PROMISES.map((p, i) => (
//           <div key={i} className="promise-card" style={{ animationDelay: (i * 0.08) + 's' }}>
//             <span className="promise-emoji">{p.emoji}</span>
//             <p className="promise-text">{p.text}</p>
//             <p className="promise-tamil">{p.tamil}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // MEMORY WALL
// // ═══════════════════════════════════════
// const MEMORIES = [
//   { emoji: '🎡', text: 'Our first date', tamil: 'நம் முதல் சந்திப்பு', bg: '#ff6b6b' },
//   { emoji: '🎬', text: 'Movie nights', tamil: 'சினிமா இரவுகள்', bg: '#ee5a24' },
//   { emoji: '🏖️', text: 'Beach sunsets', tamil: 'கடற்கரை சூரிய அஸ்தமனம்', bg: '#f0932b' },
//   { emoji: '🎂', text: 'Birthdays', tamil: 'பிறந்தநாள் கொண்டாட்டம்', bg: '#eb4d4b' },
//   { emoji: '🌧️', text: 'Dancing in rain', tamil: 'மழையில் நடனம்', bg: '#e056a0' },
//   { emoji: '⛄', text: 'Winter cuddles', tamil: 'குளிர்கால அரவணைப்பு', bg: '#c44569' },
//   { emoji: '🎄', text: 'Christmas magic', tamil: 'கிறிஸ்துமஸ் மந்திரம்', bg: '#cf6a87' },
//   { emoji: '🌅', text: 'Watching sunrises', tamil: 'சூரிய உதயம்', bg: '#e66767' },
//   { emoji: '✈️', text: 'Adventures', tamil: 'சாகச பயணங்கள்', bg: '#fd79a8' },
//   { emoji: '🍕', text: 'Cooking together', tamil: 'ஒன்றாக சமைத்தல்', bg: '#e17055' },
//   { emoji: '📚', text: 'Reading together', tamil: 'ஒன்றாக படிப்பது', bg: '#d63031' },
//   { emoji: '🎮', text: 'Gaming nights', tamil: 'விளையாட்டு இரவுகள்', bg: '#b53471' },
//   { emoji: '🎤', text: 'Karaoke nights', tamil: 'பாடல் இரவுகள்', bg: '#6c5ce7' },
//   { emoji: '🛍️', text: 'Shopping dates', tamil: 'ஷாப்பிங் நாட்கள்', bg: '#00b894' },
//   { emoji: '🏔️', text: 'Mountain trips', tamil: 'மலை பயணங்கள்', bg: '#0984e3' }
// ]

// function MemoryWall() {
//   const [flipped, setFlipped] = useState([])

//   function toggleFlip(i) {
//     setFlipped((prev) =>
//       prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
//     )
//   }

//   return (
//     <div className="memory-wall">
//       <h3>📸 Our Memories / நம் நினைவுகள் 📸</h3>
//       <p className="section-subtitle">Tap cards to flip!</p>
//       <div className="memory-grid">
//         {MEMORIES.map((m, i) => (
//           <div key={i} className={'memory-card-wrapper' + (flipped.includes(i) ? ' flipped' : '')}
//             onClick={() => toggleFlip(i)}
//             style={{ animationDelay: (i * 0.06) + 's' }}
//             role="button"
//             tabIndex={0}
//             onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFlip(i) }}
//             aria-label={`Memory: ${m.text}`}>
//             <div className="memory-card-inner">
//               <div className="memory-card-front" style={{ backgroundColor: m.bg }}>
//                 <span className="memory-emoji">{m.emoji}</span>
//                 <p>{m.text}</p>
//               </div>
//               <div className="memory-card-back" style={{ backgroundColor: m.bg }}>
//                 <span className="memory-emoji">{m.emoji}</span>
//                 <p className="memory-tamil">{m.tamil}</p>
//                 <p className="memory-love">💕</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <p className="memory-count">💕 {flipped.length}/{MEMORIES.length} memories flipped!</p>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // REASONS I LOVE YOU
// // ═══════════════════════════════════════
// const REASONS = [
//   { emoji: '😊', text: 'Your beautiful smile', tamil: 'உன் அழகான புன்னகை' },
//   { emoji: '😂', text: 'Your amazing laugh', tamil: 'உன் அற்புதமான சிரிப்பு' },
//   { emoji: '💪', text: 'Your strength', tamil: 'உன் வலிமை' },
//   { emoji: '🧠', text: 'Your brilliant mind', tamil: 'உன் புத்திசாலித்தனம்' },
//   { emoji: '💛', text: 'Your kind heart', tamil: 'உன் கருணை இதயம்' },
//   { emoji: '👀', text: 'Your gorgeous eyes', tamil: 'உன் அழகான கண்கள்' },
//   { emoji: '🤗', text: 'Your warm hugs', tamil: 'உன் அரவணைப்பு' },
//   { emoji: '🎵', text: 'Your sweet voice', tamil: 'உன் இனிய குரல்' },
//   { emoji: '✨', text: 'Everything about you', tamil: 'உன் எல்லாமே' },
//   { emoji: '🌟', text: 'Your inner light', tamil: 'உன் உள் ஒளி' },
//   { emoji: '🦋', text: 'Your gentle nature', tamil: 'உன் மென்மை' },
//   { emoji: '🌹', text: 'Your beauty inside out', tamil: 'உன் உள்ளும் புறமும் அழகு' }
// ]

// function ReasonsILoveYou() {
//   const [revealed, setRevealed] = useState([])

//   function toggleReveal(index) {
//     setRevealed((prev) =>
//       prev.includes(index) ? prev : [...prev, index]
//     )
//   }

//   return (
//     <div className="reasons-section">
//       <h3>💖 Reasons I Love You / நான் உன்னை நேசிக்கும் காரணங்கள் 💖</h3>
//       <p className="section-subtitle">Tap each heart to reveal!</p>
//       <div className="reasons-grid">
//         {REASONS.map((r, i) => (
//           <div key={i} className={'reason-card' + (revealed.includes(i) ? ' revealed' : '')}
//             onClick={() => toggleReveal(i)}
//             style={{ animationDelay: (i * 0.06) + 's' }}
//             role="button"
//             tabIndex={0}
//             onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleReveal(i) }}>
//             {!revealed.includes(i) ? (
//               <>
//                 <span className="reason-heart">💖</span>
//                 <p className="reason-num">#{i + 1}</p>
//               </>
//             ) : (
//               <>
//                 <span className="reason-emoji">{r.emoji}</span>
//                 <p className="reason-text">{r.text}</p>
//                 <p className="reason-tamil">{r.tamil}</p>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="revealed-count">
//         💕 {revealed.length}/{REASONS.length} reasons revealed!
//       </div>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // LOVE POEM / KAVITHAI
// // ═══════════════════════════════════════
// const POEMS = [
//   {
//     title: '🌹 காதல் கவிதை 🌹',
//     lines: [
//       'உன் கண்களில் நான் கண்டேன்',
//       'என் வாழ்வின் அர்த்தத்தை...',
//       'உன் புன்னகையில் நான் உணர்ந்தேன்',
//       'என் இதயத்தின் துடிப்பை...',
//       '💕 நீ என் காதல், என் உயிர் 💕'
//     ]
//   },
//   {
//     title: '✨ Love Poem ✨',
//     lines: [
//       'In your eyes I found my home,',
//       'In your arms I found my peace,',
//       'In your heart I found my love,',
//       'In your soul I found my life...',
//       '💝 You are my everything 💝'
//     ]
//   },
//   {
//     title: '🦋 நிலவே நிலவே 🦋',
//     lines: [
//       'நிலவே நிலவே என் நிலவே,',
//       'உன் ஒளியில் நான் வாழ்கிறேன்,',
//       'காற்றே காற்றே என் காற்றே,',
//       'உன் மூச்சில் நான் சுவாசிக்கிறேன்,',
//       '💗 என்றும் உன்னவன்/உன்னவள் 💗'
//     ]
//   }
// ]

// function LovePoem() {
//   const [poemIndex, setPoemIndex] = useState(0)

//   return (
//     <div className="poem-section">
//       <div className="poem-card">
//         <h3>{POEMS[poemIndex].title}</h3>
//         {POEMS[poemIndex].lines.map((line, i) => (
//           <p key={`${poemIndex}-${i}`} className="poem-line" style={{ animationDelay: (i * 0.3) + 's' }}>
//             {line}
//           </p>
//         ))}
//       </div>
//       <div className="poem-nav">
//         {POEMS.map((_, i) => (
//           <button key={i} className={'poem-dot' + (i === poemIndex ? ' active' : '')}
//             onClick={() => setPoemIndex(i)} aria-label={`Poem ${i + 1}`}>
//             {['🌹', '✨', '🦋'][i]}
//           </button>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // LOVE CALCULATOR
// // ═══════════════════════════════════════
// function LoveCalculator({ defaultName }) {
//   const [name1, setName1] = useState(defaultName || '')
//   const [name2, setName2] = useState('')
//   const [result, setResult] = useState(null)
//   const [calculating, setCalculating] = useState(false)

//   function calculate() {
//     if (name1.trim() && name2.trim()) {
//       setCalculating(true)
//       setResult(null)
//       setTimeout(() => {
//         const combined = (name1 + name2).toLowerCase()
//         let sum = 0
//         for (let i = 0; i < combined.length; i++) sum += combined.charCodeAt(i)
//         const percentage = 75 + (sum % 26)
//         setResult(percentage)
//         setCalculating(false)
//       }, 2000)
//     }
//   }

//   const resultMsg = result >= 90 ? '🔥 SOULMATES! உங்கள் காதல் அலாதியானது!' :
//     result >= 80 ? '💝 PERFECT MATCH! அற்புதமான ஜோடி!' :
//     '💕 BEAUTIFUL LOVE! அழகான காதல்!'

//   return (
//     <div className="love-calc">
//       <h3>💘 Love Calculator / காதல் கணக்கி 💘</h3>
//       <div className="calc-inputs">
//         <input type="text" placeholder="Your name 💕" value={name1}
//           onChange={(e) => setName1(e.target.value)} className="calc-input"
//           onKeyDown={(e) => { if (e.key === 'Enter') calculate() }} />
//         <span className="calc-heart">💕</span>
//         <input type="text" placeholder="Partner name 💕" value={name2}
//           onChange={(e) => setName2(e.target.value)} className="calc-input"
//           onKeyDown={(e) => { if (e.key === 'Enter') calculate() }} />
//       </div>
//       <button className="btn-glow calc-btn" onClick={calculate}
//         disabled={calculating || !name1.trim() || !name2.trim()}>
//         {calculating ? '💫 Calculating...' : '💘 Calculate Love'}
//       </button>
//       {calculating && (
//         <div className="calc-loading">
//           <span className="loading-heart">💖</span>
//           <p>Measuring your love...</p>
//         </div>
//       )}
//       {result !== null && !calculating && (
//         <div className="calc-result">
//           <div className="result-circle">
//             <span className="result-percent">{result}%</span>
//           </div>
//           <p className="result-text">{resultMsg}</p>
//           <div className="result-emojis">
//             {['💕','❤️','💖','💗','💘','💝','🌹','✨'].map((e, i) => (
//               <span key={i} className="res-emoji" style={{ animationDelay: (i * 0.15) + 's' }}>{e}</span>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // EMOJI SHOWCASE
// // ═══════════════════════════════════════
// const FEELINGS = [
//   { emoji: '🥰', text: 'Loved', tamil: 'நேசிக்கப்பட்ட' },
//   { emoji: '😍', text: 'Amazed', tamil: 'வியப்பு' },
//   { emoji: '🤩', text: 'Starstruck', tamil: 'ஆச்சர்யம்' },
//   { emoji: '😊', text: 'Happy', tamil: 'மகிழ்ச்சி' },
//   { emoji: '🥳', text: 'Celebrating', tamil: 'கொண்டாட்டம்' },
//   { emoji: '🤗', text: 'Warm', tamil: 'அரவணைப்பு' },
//   { emoji: '😘', text: 'Kissable', tamil: 'முத்தம்' },
//   { emoji: '🫠', text: 'Melting', tamil: 'உருகுதல்' },
//   { emoji: '🥹', text: 'Touched', tamil: 'நெகிழ்ச்சி' },
//   { emoji: '💃', text: 'Dancing', tamil: 'நடனம்' },
//   { emoji: '🦋', text: 'Butterflies', tamil: 'பட்டாம்பூச்சி' },
//   { emoji: '🌸', text: 'Blooming', tamil: 'மலர்ச்சி' }
// ]

// function EmojiShowcase() {
//   return (
//     <div className="emoji-showcase">
//       <h3>✨ You Make Me Feel / நீ எனக்கு உணர்த்துவது ✨</h3>
//       <div className="emoji-grid">
//         {FEELINGS.map((item, i) => (
//           <div key={i} className="emoji-item" style={{ animationDelay: (i * 0.08) + 's' }}>
//             <span className="emoji-big">{item.emoji}</span>
//             <p className="emoji-eng">{item.text}</p>
//             <p className="emoji-tamil">{item.tamil}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // LOVE METER
// // ═══════════════════════════════════════
// function LoveMeter() {
//   const [level, setLevel] = useState(0)

//   useEffect(() => {
//     const timer = setTimeout(() => setLevel(100), 500)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="love-meter">
//       <h3>💕 Love Meter / காதல் அளவீடு 💕</h3>
//       <div className="meter-bar">
//         <div className="meter-fill" style={{ width: level + '%' }}>
//           <span>INFINITE LOVE ∞</span>
//         </div>
//       </div>
//       <p>My love for you cannot be measured! என் காதலுக்கு அளவே இல்லை! 💝</p>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // LOVE TIMELINE (NEW FEATURE)
// // ═══════════════════════════════════════
// const TIMELINE_EVENTS = [
//   { emoji: '👀', title: 'First Glance', desc: 'The moment our eyes met', tamil: 'முதல் பார்வை', period: 'Day 1' },
//   { emoji: '💬', title: 'First Chat', desc: 'When we talked for hours', tamil: 'முதல் உரையாடல்', period: 'Week 1' },
//   { emoji: '☕', title: 'First Date', desc: 'Coffee and butterflies', tamil: 'முதல் சந்திப்பு', period: 'Month 1' },
//   { emoji: '💕', title: 'First "I Love You"', desc: 'Three magical words', tamil: 'முதல் "நான் உன்னை நேசிக்கிறேன்"', period: 'Month 3' },
//   { emoji: '🌹', title: 'First Valentine', desc: 'Our special day together', tamil: 'முதல் காதலர் தினம்', period: 'Feb 14' },
//   { emoji: '🏠', title: 'Meeting Family', desc: 'Became part of the family', tamil: 'குடும்பத்தை சந்தித்தல்', period: 'Month 6' },
//   { emoji: '✈️', title: 'First Trip', desc: 'Adventures together', tamil: 'முதல் பயணம்', period: 'Month 8' },
//   { emoji: '💍', title: 'Forever Promise', desc: 'Together for eternity', tamil: 'நிரந்தர வாக்குறுதி', period: 'Forever' }
// ]

// function LoveTimeline() {
//   return (
//     <div className="timeline-section">
//       <div className="timeline">
//         {TIMELINE_EVENTS.map((event, i) => (
//           <div key={i} className="timeline-item" style={{ animationDelay: (i * 0.15) + 's' }}>
//             <div className="timeline-dot" />
//             <div className="timeline-content">
//               <span className="timeline-emoji">{event.emoji}</span>
//               <p className="timeline-title">{event.title} — <small>{event.period}</small></p>
//               <p className="timeline-desc">{event.desc}</p>
//               <p className="timeline-tamil">{event.tamil}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// // ═══════════════════════════════════════
// // SONGS DATA
// // ═══════════════════════════════════════
// const SONGS = [
//   { title: 'Uyire Uyire', artist: 'A.R. Rahman', movie: 'Bombay', emoji: '🎵', tamil: 'உயிரே உயிரே' },
//   { title: 'Kannathil Muthamittal', artist: 'A.R. Rahman', movie: 'Kannathil Muthamittal', emoji: '🎶', tamil: 'கன்னத்தில் முத்தமிட்டால்' },
//   { title: 'Munbe Vaa', artist: 'A.R. Rahman', movie: 'Sillunu Oru Kadhal', emoji: '🎸', tamil: 'முன்பே வா' },
//   { title: 'Venmathi Venmathiye', artist: 'Yuvan', movie: 'Minnale', emoji: '🌙', tamil: 'வெண்மதி வெண்மதியே' },
//   { title: 'Ennai Konjam', artist: 'Sid Sriram', movie: 'Kaakha Kaakha', emoji: '💕', tamil: 'என்னை கொஞ்சம்' },
//   { title: 'Nenjukkul Peidhidum', artist: 'Harris Jayaraj', movie: 'Vaaranam Aayiram', emoji: '🌧️', tamil: 'நெஞ்சுக்குள் பெய்திடும்' },
//   { title: 'Kadhal En Kadhal', artist: 'Yuvan', movie: 'Mayakkam Enna', emoji: '❤️', tamil: 'காதல் என் காதல்' },
//   { title: 'Oru Kadhal Devathai', artist: 'A.R. Rahman', movie: 'Kadal Desam', emoji: '🧚', tamil: 'ஒரு காதல் தேவதை' },
//   { title: 'Perfect', artist: 'Ed Sheeran', movie: 'Divide Album', emoji: '🎸', tamil: '' },
//   { title: 'All of Me', artist: 'John Legend', movie: 'Love Album', emoji: '🎹', tamil: '' },
//   { title: 'Thinking Out Loud', artist: 'Ed Sheeran', movie: 'x Album', emoji: '🎵', tamil: '' },
//   { title: 'A Thousand Years', artist: 'Christina Perri', movie: 'Twilight', emoji: '🎶', tamil: '' },
//   { title: 'Idhazhin Oram', artist: 'Ajesh', movie: '3', emoji: '💔', tamil: 'இதழின் ஓரம்' },
//   { title: 'Thalli Pogathey', artist: 'Sid Sriram', movie: 'Achcham Yenbadhu Madamaiyadaa', emoji: '🎤', tamil: 'தள்ளி போகாதே' },
//   { title: 'Maruvaarthai', artist: 'Sid Sriram', movie: 'Enai Noki Paayum Thota', emoji: '🎻', tamil: 'மறுவார்த்தை' },
//   { title: 'Kannazhaga', artist: 'Dhanush', movie: '3', emoji: '👁️', tamil: 'கண்ணாழகா' }
// ]

// // ═══════════════════════════════════════
// // GIFTS DATA
// // ═══════════════════════════════════════
// const GIFTS = [
//   { emoji: '🧸', boxEmoji: '🎁', message: 'A teddy bear to cuddle!', tamil: 'ஒரு அரவணைப்பு கரடி!', hint: 'Something cuddly' },
//   { emoji: '💐', boxEmoji: '🎁', message: 'Beautiful flowers for you!', tamil: 'உனக்கான அழகான பூக்கள்!', hint: 'Something fragrant' },
//   { emoji: '🍫', boxEmoji: '🎁', message: 'Sweet chocolates!', tamil: 'இனிப்பான சாக்லேட்கள்!', hint: 'Something sweet' },
//   { emoji: '💍', boxEmoji: '🎁', message: 'A ring of eternal promise!', tamil: 'நிரந்தர வாக்குறுதி மோதிரம்!', hint: 'Something precious' },
//   { emoji: '🎠', boxEmoji: '🎁', message: 'Dream date tickets!', tamil: 'கனவு தேதி டிக்கெட்கள்!', hint: 'An experience' },
//   { emoji: '📖', boxEmoji: '🎁', message: 'Our memory book!', tamil: 'நம் நினைவுகள் புத்தகம்!', hint: 'Something to read' },
//   { emoji: '⌚', boxEmoji: '🎁', message: 'Every second counts!', tamil: 'ஒவ்வொரு நொடியும் முக்கியம்!', hint: 'About time' },
//   { emoji: '🧣', boxEmoji: '🎁', message: 'Warm like my love!', tamil: 'என் காதல் போல சூடு!', hint: 'Something cozy' },
//   { emoji: '💎', boxEmoji: '🎁', message: 'You are my diamond!', tamil: 'நீ என் வைரம்!', hint: 'Sparkly' },
//   { emoji: '🎨', boxEmoji: '🎁', message: 'Paint our dreams!', tamil: 'நம் கனவுகளை வரைவோம்!', hint: 'Colorful' },
//   { emoji: '🎧', boxEmoji: '🎁', message: 'Listen to our songs!', tamil: 'நம் பாடல்களை கேளுங்கள்!', hint: 'Musical' },
//   { emoji: '🌹', boxEmoji: '🎁', message: '1000 roses for you!', tamil: 'உனக்காக 1000 ரோஜாக்கள்!', hint: 'Classic romance' },
//   { emoji: '✈️', boxEmoji: '🎁', message: 'Trip to Paris!', tamil: 'பாரிஸ் பயணம்!', hint: 'Travel' },
//   { emoji: '📸', boxEmoji: '🎁', message: 'A photo album of us!', tamil: 'நம் புகைப்பட ஆல்பம்!', hint: 'Memories' },
//   { emoji: '🎵', boxEmoji: '🎁', message: 'A song written for you!', tamil: 'உனக்காக எழுதிய பாடல்!', hint: 'Melodious' },
//   { emoji: '👑', boxEmoji: '🎁', message: 'You are my queen/king!', tamil: 'நீ என் ராணி/ராஜா!', hint: 'Royal' }
// ]

// // ═══════════════════════════════════════
// // SURPRISE MESSAGES
// // ═══════════════════════════════════════
// const SURPRISE_MESSAGES = [
//   { en: 'You are loved beyond measure!', ta: 'நீ அளவிலா நேசிக்கப்படுகிறாய்!' },
//   { en: 'You mean the world to me!', ta: 'நீ எனக்கு உலகம்!' },
//   { en: 'My heart belongs to you forever!', ta: 'என் இதயம் என்றும் உன்னுடையது!' },
//   { en: 'You are my everything!', ta: 'நீ என் எல்லாமே!' },
//   { en: 'I fall deeper in love each day!', ta: 'நாள்தோறும் உன்மேல் காதல் அதிகரிக்கிறது!' },
//   { en: 'You complete me!', ta: 'நீ என்னை முழுமையாக்குகிறாய்!' },
//   { en: 'Together forever!', ta: 'என்றும் ஒன்றாக!' }
// ]

// // ═══════════════════════════════════════
// // NAV ITEMS
// // ═══════════════════════════════════════
// const NAV_ITEMS = [
//   { id: 'home', label: '🏠', full: 'Home' },
//   { id: 'letter', label: '💌', full: 'Letter' },
//   { id: 'gifts', label: '🎁', full: 'Gifts' },
//   { id: 'music', label: '🎵', full: 'Music' },
//   { id: 'quiz', label: '💕', full: 'Quiz' },
//   { id: 'memories', label: '📸', full: 'Memories' },
//   { id: 'promises', label: '🤞', full: 'Promises' },
//   { id: 'reasons', label: '💖', full: 'Reasons' },
//   { id: 'poems', label: '📝', full: 'Poems' },
//   { id: 'timeline', label: '📅', full: 'Timeline' },
//   { id: 'calculator', label: '💘', full: 'Love Calc' }
// ]

// // ═══════════════════════════════════════
// // ██████ MAIN APP ██████
// // ═══════════════════════════════════════
// function App() {
//   const [section, setSection] = useState('home')
//   const [letterOpen, setLetterOpen] = useState(false)
//   const [rainEmojis, setRainEmojis] = useState([])
//   const [fireworksActive, setFireworksActive] = useState(false)
//   const [confettiActive, setConfettiActive] = useState(false)
//   const [currentSong, setCurrentSong] = useState(0)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [surprise, setSurprise] = useState(false)
//   const [name, setName] = useState('')
//   const [entered, setEntered] = useState(false)
//   const [clickCount, setClickCount] = useState(0)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [toasts, setToasts] = useState([])
//   const [showScrollTop, setShowScrollTop] = useState(false)
//   const [navScrolled, setNavScrolled] = useState(false)
//   const [nameError, setNameError] = useState('')
//   const [giftsOpened, setGiftsOpened] = useState(0)
//   const mainRef = useRef(null)

//   // Scroll tracking
//   useEffect(() => {
//     function handleScroll() {
//       setShowScrollTop(window.scrollY > 400)
//       setNavScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll, { passive: true })
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Close menu on section change
//   useEffect(() => {
//     setMenuOpen(false)
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }, [section])

//   // Toast helper
//   const showToast = useCallback((message) => {
//     const id = Date.now()
//     setToasts((prev) => [...prev.slice(-2), { id, message }])
//     setTimeout(() => {
//       setToasts((prev) => prev.map((t) => t.id === id ? { ...t, hiding: true } : t))
//       setTimeout(() => {
//         setToasts((prev) => prev.filter((t) => t.id !== id))
//       }, 300)
//     }, 2500)
//   }, [])

//   const triggerRain = useCallback(() => {
//     const emojiList = ['❤️','💕','💖','💗','💘','💝','🌹','✨','🥰','😍','💋','🦋','💐','🌸','🎀','💎','👑','🌺']
//     const newRain = []
//     for (let i = 0; i < 40; i++) {
//       newRain.push({
//         id: Date.now() + i,
//         emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
//         x: Math.random() * 100
//       })
//     }
//     setRainEmojis(newRain)
//     setTimeout(() => setRainEmojis([]), 4000)
//   }, [])

//   const triggerFireworks = useCallback(() => {
//     setFireworksActive(true)
//     setTimeout(() => setFireworksActive(false), 4000)
//   }, [])

//   const triggerConfetti = useCallback(() => {
//     setConfettiActive(true)
//     setTimeout(() => setConfettiActive(false), 4000)
//   }, [])

//   function handleHeartClick() {
//     triggerRain()
//     triggerFireworks()
//     triggerConfetti()
//     setSurprise(true)
//     setClickCount((c) => c + 1)
//     showToast('💝 You clicked with love!')
//     setTimeout(() => setSurprise(false), 5000)
//   }

//   function togglePlay() {
//     setIsPlaying((p) => !p)
//   }

//   function handleEnter() {
//     const trimmed = name.trim()
//     if (trimmed.length === 0) {
//       setNameError('Please enter a name! 💕')
//       return
//     }
//     if (trimmed.length < 2) {
//       setNameError('Name must be at least 2 characters! 💕')
//       return
//     }
//     setNameError('')
//     setEntered(true)
//     triggerFireworks()
//     triggerRain()
//     triggerConfetti()
//   }

//   function handleGiftOpen(index) {
//     setGiftsOpened((prev) => prev + 1)
//     triggerRain()
//     triggerConfetti()
//     showToast(`🎁 Gift #${index + 1} opened!`)
//   }

//   function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' })
//   }

//   const currentMsg = SURPRISE_MESSAGES[clickCount % SURPRISE_MESSAGES.length]

//   // ═══ ENTRY SCREEN ═══
//   if (!entered) {
//     return (
//       <div className="entry-screen">
//         <FloatingHearts />
//         <div className="entry-box">
//           <div className="entry-rings">💍💕💍</div>
//           <span className="entry-heart">💝</span>
//           <h1 className="entry-title">Happy Valentine&#39;s Day!</h1>
//           <h2 className="entry-title-tamil">இனிய காதலர் தினம்! 💕</h2>
//           <p className="entry-desc">Enter your Valentine&#39;s name to begin the surprise!</p>
//           <p className="entry-desc-tamil">உங்கள் காதலரின் பெயரை உள்ளிடுங்கள்!</p>
//           <div className="input-wrapper">
//             <span className="input-icon">💕</span>
//             <input
//               type="text"
//               placeholder="Your Valentine's name..."
//               value={name}
//               onChange={(e) => { setName(e.target.value); setNameError('') }}
//               onKeyDown={(e) => { if (e.key === 'Enter') handleEnter() }}
//               className="name-input"
//               autoFocus
//               maxLength={30}
//               aria-label="Valentine's name"
//             />
//           </div>
//           {nameError && <p className="entry-error">{nameError}</p>}
//           <button className="btn-glow entry-btn" onClick={handleEnter}>
//             💌 Open My Surprise 💌
//           </button>
//           <div className="entry-emojis">
//             {['🌹','💕','🦋','✨','💖','🌸','💝','🥰','😍','💐','🎀','💎'].map((e, i) => (
//               <span key={i} style={{ animationDelay: (i * 0.12) + 's' }}>{e}</span>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // ═══ MAIN APP ═══
//   return (
//     <div className="app">
//       <FloatingHearts />
//       <SparkleTrail />
//       <EmojiRain emojis={rainEmojis} />
//       <Fireworks active={fireworksActive} />
//       <ConfettiBurst active={confettiActive} />
//       <ToastContainer toasts={toasts} />

//       {/* NAV */}
//       <nav className={'nav' + (navScrolled ? ' scrolled' : '')} role="navigation">
//         <div className="nav-brand" onClick={() => setSection('home')} role="button" tabIndex={0}>
//           💝 Valentine&#39;s 💝
//         </div>
//         <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu" aria-expanded={menuOpen}>
//           {menuOpen ? '✖️' : '☰'}
//         </button>
//         <div className={'nav-links' + (menuOpen ? ' open' : '')} role="menubar">
//           {NAV_ITEMS.map((item) => (
//             <button key={item.id}
//               className={'nav-btn' + (section === item.id ? ' active' : '')}
//               onClick={() => setSection(item.id)}
//               role="menuitem">
//               <span className="nav-icon">{item.label}</span>
//               <span className="nav-text">{item.full}</span>
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* MAIN */}
//       <main className="main-content" ref={mainRef}>

//         {/* HOME */}
//         {section === 'home' && (
//           <div className="home-section fade-in">
//             <div className="hero">
//               <div className="hero-bg-effect" aria-hidden="true"></div>
//               <h1 className="hero-title">
//                 <span className="glow-text">Happy Valentine&#39;s Day, {name}! 💝</span>
//               </h1>
//               <h2 className="hero-title-tamil">
//                 இனிய காதலர் தினம், {name}! 🌹
//               </h2>
//               <div className="hero-subtitle">
//                 <TypeWriter
//                   text={`You are the most amazing person in my life... I love you, ${name}! நான் உன்னை காதலிக்கிறேன்! 💕🌹✨`}
//                   speed={45}
//                 />
//               </div>
//               <div className="heartbeat-container" onClick={handleHeartClick}
//                 role="button" tabIndex={0} aria-label="Click for surprise">
//                 <div className="heart-glow" aria-hidden="true"></div>
//                 <span className="heartbeat">💖</span>
//                 <p>Click for surprise! <span className="click-counter">x{clickCount}</span></p>
//               </div>
//               {surprise && (
//                 <div className="surprise-popup">
//                   <h2>🎉 SURPRISE! 🎉</h2>
//                   <p className="surprise-en">{currentMsg.en}</p>
//                   <p className="surprise-ta">{currentMsg.ta}</p>
//                   <div className="surprise-emojis">
//                     {['🥰','😍','💕','🌹','💝','🦋','✨','💐','🎆','🎇','👑','💎'].map((e, i) => (
//                       <span key={i} className="bounce-emoji" style={{ animationDelay: (i * 0.08) + 's' }}>{e}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//             <CountdownTimer />
//             <WishCarousel />
//             <LoveMeter />
//             <EmojiShowcase />
//           </div>
//         )}

//         {section === 'letter' && (
//           <div className="letter-section fade-in">
//             <h2 className="section-title">💌 Love Letter / காதல் கடிதம் 💌</h2>
//             <LoveLetter isOpen={letterOpen} onToggle={() => setLetterOpen(!letterOpen)} name={name} />
//           </div>
//         )}

//         {section === 'gifts' && (
//           <div className="gifts-section fade-in">
//             <h2 className="section-title">🎁 Open Your Gifts / உங்கள் பரிசுகளை திறங்கள் 🎁</h2>
//             <p className="section-subtitle">Click each gift to reveal! பரிசை க்ளிக் செய்யுங்கள்!</p>
//             <div className="gifts-grid">
//               {GIFTS.map((gift, i) => (
//                 <GiftBox key={i} gift={gift} index={i} onOpen={handleGiftOpen} />
//               ))}
//             </div>
//             <div className="gifts-progress">
//               <p>🎁 {giftsOpened}/{GIFTS.length} gifts opened!</p>
//               <div className="gifts-progress-bar">
//                 <div className="gifts-progress-fill" style={{ width: (giftsOpened / GIFTS.length * 100) + '%' }} />
//               </div>
//             </div>
//           </div>
//         )}

//         {section === 'music' && (
//           <div className="music-section fade-in">
//             <h2 className="section-title">🎵 Love Playlist / காதல் பாடல்கள் 🎵</h2>
//             <MusicPlayer songs={SONGS} currentSong={currentSong} setCurrent={setCurrentSong}
//               isPlaying={isPlaying} togglePlay={togglePlay} />
//             <div className="dedicate-box">
//               <h3>💝 Song Dedication 💝</h3>
//               <p>Dear {name}, this playlist is dedicated to you! 🎶💕</p>
//               <p className="dedicate-tamil">அன்பான {name}, இந்த பாடல்கள் உனக்காக! 🌹</p>
//             </div>
//           </div>
//         )}

//         {section === 'quiz' && (
//           <div className="quiz-section fade-in">
//             <h2 className="section-title">💕 Love Quiz / காதல் வினாடி வினா 💕</h2>
//             <LoveQuiz onComplete={() => { triggerFireworks(); triggerConfetti(); showToast('🏆 Quiz completed!') }} />
//           </div>
//         )}

//         {section === 'memories' && (
//           <div className="memories-section fade-in">
//             <MemoryWall />
//           </div>
//         )}

//         {section === 'promises' && (
//           <div className="promises-page fade-in">
//             <LovePromises />
//           </div>
//         )}

//         {section === 'reasons' && (
//           <div className="reasons-page fade-in">
//             <ReasonsILoveYou />
//           </div>
//         )}

//         {section === 'poems' && (
//           <div className="poems-page fade-in">
//             <h2 className="section-title">📝 Love Poems / காதல் கவிதைகள் 📝</h2>
//             <LovePoem />
//           </div>
//         )}

//         {section === 'timeline' && (
//           <div className="timeline-page fade-in">
//             <h2 className="section-title">📅 Our Love Story / நம் காதல் கதை 📅</h2>
//             <p className="section-subtitle">Every moment with you is special 💕</p>
//             <LoveTimeline />
//           </div>
//         )}

//         {section === 'calculator' && (
//           <div className="calc-page fade-in">
//             <LoveCalculator defaultName={name} />
//           </div>
//         )}
//       </main>

//       {/* FOOTER */}
//       <footer className="footer">
//         <div className="footer-heart">💝</div>
//         <p>Made with 💖 for {name}</p>
//         <p>Happy Valentine&#39;s Day 2025 💝</p>
//         <p className="footer-tamil">இனிய காதலர் தினம் 🌹</p>
//         <div className="footer-emojis">
//           {['💕','❤️','💖','💗','💘','💝','💞','💓','🌹','✨','💐','🦋','🌸','💎','👑','🎀'].map((e, i) => (
//             <span key={i} className="footer-emoji" style={{ animationDelay: (i * 0.12) + 's' }}>{e}</span>
//           ))}
//         </div>
//         <p className="footer-credits">✨ Built with love & React ✨</p>
//       </footer>

//       {/* FAB */}
//       <button className="fab" onClick={handleHeartClick} aria-label="Surprise button">💝</button>

//       {/* SCROLL TO TOP */}
//       <button className={'scroll-top' + (showScrollTop ? ' visible' : '')}
//         onClick={scrollToTop} aria-label="Scroll to top">
//         ⬆️
//       </button>
//     </div>
//   )
// }

// export default App


import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'

// ═══════════════════════════════════════
// YOUR GIRL'S PET NAMES 💕
// ═══════════════════════════════════════
const PET_NAMES = ['Kuttyma 🥰', 'Paapuu 😘', 'Chellamee 💋', 'Thangoo 👑']
const MAIN_NAME = 'Kuttyma'
const ALL_NAMES_TEXT = 'Ennoda Kuttyma, Paapuu, Chellamee, Thangoo'

// ═══════════════════════════════════════
// LOVE & KISS EMOJIS COLLECTIONS
// ═══════════════════════════════════════
const LOVE_EMOJIS = [
  '❤️','💕','💖','💗','💘','💝','💞','💓','💟','💋',
  '😘','😍','🥰','😻','💏','💑','👩‍❤️‍👨','👩‍❤️‍💋‍👨',
  '🌹','✨','🦋','💐','🥀','🌸','🌺','🏵️','💮','🪷',
  '⭐','🌟','💫','🪄','🎀','🧸','🍫','💎','👑',
  '💄','👄','🫦','💅','🩷','❣️','♥️','🫶','🤗'
]

const KISS_LOVE_EMOJIS = ['💋','😘','💕','💖','💗','💝','🥰','😍','👄','🫦','💏','💑','❤️‍🔥','🩷','❣️','♥️','🫶']

const HEART_EMOJIS = [
  '❤️','💕','💖','💗','💘','💝','💞','💓','💟','🌹',
  '✨','🦋','💐','💋','🌸','🌺','💮','🪷','😘','🥰',
  '😍','💏','💑','❤️‍🔥','🩷','❣️','♥️','🫶','👄','🫦',
  '⭐','🌟','💫','🎀','🧸','💎','👑','💄','👩‍❤️‍💋‍👨'
]

// ═══════════════════════════════════════
// PET NAME ROTATOR COMPONENT
// ═══════════════════════════════════════
function PetNameRotator() {
  const [currentName, setCurrentName] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentName((p) => (p + 1) % PET_NAMES.length)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  return (
    <span className="pet-name-rotator">
      {PET_NAMES[currentName]}
    </span>
  )
}

// ═══════════════════════════════════════
// KISS BURST EFFECT
// ═══════════════════════════════════════
function KissBurst({ active }) {
  const items = useMemo(() => {
    if (!active) return []
    const arr = []
    for (let i = 0; i < 30; i++) {
      arr.push({
        id: i,
        emoji: KISS_LOVE_EMOJIS[i % KISS_LOVE_EMOJIS.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 1.5,
        size: 20 + Math.random() * 40,
        duration: 1.5 + Math.random() * 2
      })
    }
    return arr
  }, [active])

  if (!active) return null

  return (
    <div className="kiss-burst" aria-hidden="true">
      {items.map((k) => (
        <span key={k.id} className="kiss-emoji" style={{
          left: k.x + '%', top: k.y + '%',
          animationDelay: k.delay + 's',
          animationDuration: k.duration + 's',
          fontSize: k.size + 'px'
        }}>
          {k.emoji}
        </span>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════
// FLOATING HEARTS BACKGROUND (MORE EMOJIS)
// ═══════════════════════════════════════
function FloatingHearts() {
  const items = useMemo(() => {
    const arr = []
    for (let i = 0; i < 45; i++) {
      arr.push({
        id: i,
        emoji: HEART_EMOJIS[i % HEART_EMOJIS.length],
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 8 + Math.random() * 14,
        size: 14 + Math.random() * 28
      })
    }
    return arr
  }, [])

  return (
    <div className="floating-hearts" aria-hidden="true">
      {items.map((h) => (
        <span key={h.id} className="heart-float" style={{
          left: h.left + '%',
          animationDelay: h.delay + 's',
          animationDuration: h.duration + 's',
          fontSize: h.size + 'px'
        }}>
          {h.emoji}
        </span>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════
// SPARKLE CURSOR TRAIL (WITH KISS EMOJIS)
// ═══════════════════════════════════════
const SPARKLE_EMOJIS = ['✨','💖','⭐','💕','🌟','💗','🦋','💫','🌸','💎','💋','😘','🥰','💝','❤️‍🔥']

function SparkleTrail() {
  const [sparkles, setSparkles] = useState([])
  const throttleRef = useRef(0)

  useEffect(() => {
    function handleMove(e) {
      const now = Date.now()
      if (now - throttleRef.current < 70) return
      throttleRef.current = now

      const s = {
        id: now + Math.random(),
        x: e.clientX || (e.touches?.[0]?.clientX || 0),
        y: e.clientY || (e.touches?.[0]?.clientY || 0),
        emoji: SPARKLE_EMOJIS[Math.floor(Math.random() * SPARKLE_EMOJIS.length)]
      }
      setSparkles((prev) => [...prev.slice(-14), s])
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('touchmove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('touchmove', handleMove)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setSparkles((prev) => prev.slice(1))
    }, 350)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {sparkles.map((s) => (
        <span key={s.id} className="sparkle-trail" style={{ left: s.x + 'px', top: s.y + 'px' }} aria-hidden="true">
          {s.emoji}
        </span>
      ))}
    </>
  )
}

// ═══════════════════════════════════════
// EMOJI RAIN (MORE KISS EMOJIS)
// ═══════════════════════════════════════
function EmojiRain({ emojis }) {
  if (!emojis.length) return null
  return (
    <div className="emoji-rain" aria-hidden="true">
      {emojis.map((e) => (
        <span key={e.id} className="rain-emoji" style={{
          left: e.x + '%',
          animationDuration: (1.5 + Math.random() * 2.5) + 's',
          fontSize: (18 + Math.random() * 24) + 'px',
          animationDelay: (Math.random() * 0.5) + 's'
        }}>
          {e.emoji}
        </span>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════
// FIREWORKS
// ═══════════════════════════════════════
const FIREWORK_EMOJIS = ['🎆','🎇','✨','💥','🌟','⭐','🎉','🎊','💫','🔥','💋','😘','❤️‍🔥','💝']

function Fireworks({ active }) {
  const items = useMemo(() => {
    if (!active) return []
    const arr = []
    for (let i = 0; i < 28; i++) {
      arr.push({
        id: i,
        emoji: FIREWORK_EMOJIS[i % FIREWORK_EMOJIS.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2.5,
        size: 18 + Math.random() * 45
      })
    }
    return arr
  }, [active])

  if (!active) return null

  return (
    <div className="fireworks" aria-hidden="true">
      {items.map((f) => (
        <span key={f.id} className="firework" style={{
          left: f.x + '%', top: f.y + '%',
          animationDelay: f.delay + 's', fontSize: f.size + 'px'
        }}>
          {f.emoji}
        </span>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════
// CONFETTI BURST
// ═══════════════════════════════════════
const CONFETTI_COLORS = ['#ff6b9d','#f9ca24','#e74c3c','#a55eea','#00d2d3','#ff9ff3','#54a0ff','#5f27cd','#ff0844','#ff4757']

function ConfettiBurst({ active }) {
  const items = useMemo(() => {
    if (!active) return []
    const arr = []
    for (let i = 0; i < 50; i++) {
      arr.push({
        id: i,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        left: Math.random() * 100,
        delay: Math.random() * 1,
        size: 6 + Math.random() * 10,
        duration: 2 + Math.random() * 3
      })
    }
    return arr
  }, [active])

  if (!active) return null

  return (
    <div className="confetti-container" aria-hidden="true">
      {items.map((c) => (
        <div key={c.id} className="confetti-piece" style={{
          left: c.left + '%',
          backgroundColor: c.color,
          animationDelay: c.delay + 's',
          animationDuration: c.duration + 's',
          width: c.size + 'px',
          height: c.size * 1.5 + 'px'
        }} />
      ))}
    </div>
  )
}

// ═══════════════════════════════════════
// TOAST NOTIFICATION
// ═══════════════════════════════════════
function ToastContainer({ toasts }) {
  if (!toasts.length) return null
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={'toast' + (t.hiding ? ' hiding' : '')}>
          {t.message}
        </div>
      ))}
    </div>
  )
}

// ═══════════════════════════════════════
// TYPEWRITER WITH LOVE
// ═══════════════════════════════════════
function TypeWriter({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setDisplayed('')
    setIndex(0)
  }, [text])

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayed((p) => p + text[index])
        setIndex((i) => i + 1)
      }, speed)
      return () => clearTimeout(timer)
    }
  }, [index, text, speed])

  return (
    <span className="typewriter">
      {displayed}
      <span className="cursor-blink">💕</span>
    </span>
  )
}

// ═══════════════════════════════════════
// LOVE LETTER (PERSONALIZED)
// ═══════════════════════════════════════
function LoveLetter({ isOpen, onToggle }) {
  return (
    <div className={'love-letter' + (isOpen ? ' open' : '')} onClick={onToggle} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onToggle() }}
      aria-label={isOpen ? 'Close love letter' : 'Open love letter'}>
      {!isOpen ? (
        <div className="envelope">
          <div className="envelope-flap"></div>
          <div className="envelope-icon">💌</div>
          <p className="tap-text">💋 Tap to open your love letter, {MAIN_NAME}! 💋</p>
          <div className="envelope-hearts">
            <span>💋</span><span>💖</span><span>😘</span><span>💕</span><span>💋</span>
          </div>
        </div>
      ) : (
        <div className="letter-content">
          <div className="letter-decoration">🌹💋💕💋🌹</div>
          <h3>💌 My Dearest {MAIN_NAME} 💌</h3>
          <p>
            என் அன்பான Kuttyma 🥰, Paapuu 😘, Chellamee 💋, Thangoo 👑...
            Every moment with you feels like a beautiful dream I never want to
            wake up from. You are my sunshine ☀️, my moonlight 🌙, and every
            star ⭐ in my sky.
          </p>
          <p>
            உன் புன்னகை 😊 என் உலகை ஒளிரச் செய்கிறது, உன் சிரிப்பு 😄
            என் விருப்பமான இசை, உன் அன்பு 💕 நான் பெற்ற மிகப்பெரிய பரிசு.
            என் Chellamee 💋, நீ என் வாழ்வின் அர்த்தம் 💝
          </p>
          <p>
            I love you more than words could ever express, more than all the
            roses 🌹 in the world, and deeper than any ocean 🌊. You are my
            Kuttyma 🥰, my Paapuu 😘, my everything 💖!
          </p>
          <p>
            என் Thangoo 👑, நீ இல்லாத ஒரு நாளும் எனக்கு வேண்டாம் 💝.
            நீ என் இதயத்தின் துடிப்பு 💓, என் உயிரின் உயிர் 🦋.
            உன் கண்களில் நான் என் உலகத்தை பார்க்கிறேன் 👀💕
          </p>
          <p>
            You make my heart skip a beat 💓, you give me butterflies 🦋, and
            you make every day feel like Valentine&#39;s Day 💝. I promise to love
            you until the stars fall from the sky ⭐🌌. Every kiss 💋, every
            hug 🤗, every moment with you is magical ✨
          </p>
          <div className="letter-decoration">✨💋💖💋✨</div>
          <p className="signature">
            Forever and Always Yours 💝💋<br />
            <span>~ என்றென்றும் உன்னவன் Naveen ~</span><br />
            <span>~ For my Kuttyma, Paapuu, Chellamee, Thangoo ~</span><br />
            <span>💋😘💕❤️‍🔥🫶</span>
          </p>
          <p className="tap-text">💋 Tap to close 💋</p>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════
// GIFT BOX
// ═══════════════════════════════════════
function GiftBox({ gift, index, onOpen }) {
  const [opened, setOpened] = useState(false)
  const [animating, setAnimating] = useState(false)

  function handleClick() {
    if (!opened && !animating) {
      setAnimating(true)
      setTimeout(() => {
        setOpened(true)
        setAnimating(false)
        if (onOpen) onOpen(index)
      }, 600)
    }
  }

  return (
    <div
      className={'gift-box' + (opened ? ' opened' : '') + (animating ? ' shaking' : '')}
      onClick={handleClick}
      style={{ animationDelay: (index * 0.1) + 's' }}
      role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
      aria-label={opened ? `Gift ${index + 1}: ${gift.message}` : `Open gift ${index + 1}`}
    >
      {!opened ? (
        <>
          <div className="gift-lid">
            <div className="gift-bow">🎀</div>
          </div>
          <div className="gift-body">{gift.boxEmoji || '🎁'}</div>
          <p className="gift-label">Gift #{index + 1}</p>
          <p className="gift-hint">{gift.hint}</p>
        </>
      ) : (
        <div className="gift-reveal">
          <div className="gift-sparkles">✨💋✨</div>
          <span className="gift-emoji">{gift.emoji}</span>
          <p className="gift-message">{gift.message}</p>
          <p className="gift-tamil">{gift.tamil}</p>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════
// MUSIC PLAYER
// ═══════════════════════════════════════
function MusicPlayer({ songs, currentSong, setCurrent, isPlaying, togglePlay }) {
  const [liked, setLiked] = useState([])

  function toggleLike(index) {
    setLiked((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <div className="music-player">
      <h3>🎵 {MAIN_NAME}'s காதல் பாடல்கள் 💋🎵</h3>

      <div className="now-playing">
        <div className="vinyl-record">
          <span className={'music-disc' + (isPlaying ? ' spinning' : '')}>💿</span>
          <div className="vinyl-shine"></div>
        </div>
        <div className="song-info">
          <p className="song-title">{songs[currentSong].title}</p>
          <p className="song-artist">{songs[currentSong].artist}</p>
          <p className="song-movie">{songs[currentSong].movie}</p>
          {songs[currentSong].tamil && <p className="song-tamil">{songs[currentSong].tamil}</p>}
        </div>
      </div>

      <div className="music-visualizer" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <div key={i} className={'viz-bar' + (isPlaying ? ' active' : '')}
            style={{ animationDelay: (i * 0.08) + 's' }}
          />
        ))}
      </div>

      <div className="music-controls">
        <button className="ctrl-btn" onClick={() => setCurrent((currentSong - 1 + songs.length) % songs.length)}
          aria-label="Previous song">⏮️</button>
        <button className="ctrl-btn play-btn" onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button className="ctrl-btn" onClick={() => setCurrent((currentSong + 1) % songs.length)}
          aria-label="Next song">⏭️</button>
      </div>

      <div className="playlist" role="list">
        {songs.map((song, i) => (
          <div key={i} className={'playlist-item' + (i === currentSong ? ' active' : '')} role="listitem">
            <div className="playlist-left" onClick={() => setCurrent(i)}>
              <span className="pl-icon">{i === currentSong && isPlaying ? '🎶' : song.emoji}</span>
              <div>
                <span className="pl-title">{song.title}</span>
                <span className="pl-artist">{song.artist}</span>
              </div>
            </div>
            <button className="like-btn" onClick={() => toggleLike(i)}
              aria-label={liked.includes(i) ? 'Unlike' : 'Like'}>
              {liked.includes(i) ? '❤️‍🔥' : '🤍'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════
// COUNTDOWN TIMER
// ═══════════════════════════════════════
function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isValentine, setIsValentine] = useState(false)

  useEffect(() => {
    function calc() {
      const now = new Date()
      const valentine = new Date(now.getFullYear(), 1, 14)

      if (now.getMonth() === 1 && now.getDate() === 14) {
        setIsValentine(true)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setIsValentine(false)
      if (now > valentine) valentine.setFullYear(valentine.getFullYear() + 1)
      const diff = valentine - now

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      })
    }
    calc()
    const timer = setInterval(calc, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="countdown">
      <h3>💘 {MAIN_NAME}'s Valentine Countdown 💋💘</h3>
      {isValentine ? (
        <div className="countdown-valentine-msg">
          <p>🎉💋💝 Happy Valentine&#39;s Day, {MAIN_NAME}! 💝💋🎉</p>
          <p>இனிய காதலர் தினம், என் Chellamee! 🌹😘</p>
        </div>
      ) : (
        <div className="countdown-boxes">
          {['days', 'hours', 'minutes', 'seconds'].map((label, idx) => (
            <div key={label} className="countdown-box" style={{ animationDelay: (idx * 0.2) + 's' }}>
              <span className="countdown-number">
                {String(timeLeft[label]).padStart(2, '0')}
              </span>
              <span className="countdown-label">{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════
// WISH CAROUSEL (MORE LOVE KISS)
// ═══════════════════════════════════════
const WISHES = [
  { emoji: '💋', text: 'Every kiss with you feels like the first time', tamil: 'உன்னுடன் ஒவ்வொரு முத்தமும் முதல் முறை போல 😘' },
  { emoji: '🌹', text: 'You are the most beautiful soul I know, Kuttyma', tamil: 'நீ என் அழகான உலகம், என் Kuttyma 🥰' },
  { emoji: '🦋', text: 'My heart skips a beat every time I see you, Paapuu', tamil: 'உன்னை பார்க்கும் போதெல்லாம் என் இதயம் துடிக்கிறது, Paapuu 💓' },
  { emoji: '🌈', text: 'You color my world with happiness, Chellamee', tamil: 'நீ என் வாழ்வில் மகிழ்ச்சியை நிரப்புகிறாய், Chellamee 💋' },
  { emoji: '🔥', text: 'Our love burns brighter than any fire, Thangoo', tamil: 'நம் காதல் எந்த நெருப்பையும் விட பிரகாசமாக எரிகிறது, Thangoo 👑' },
  { emoji: '💎', text: 'You are the most precious gem in my life', tamil: 'நீ என் வாழ்வின் மிக விலைமதிப்பற்ற ரத்தினம் 💎' },
  { emoji: '😘', text: 'I want to kiss you a thousand times', tamil: 'உனக்கு ஆயிரம் முத்தங்கள் தர விரும்புகிறேன் 💋💋💋' },
  { emoji: '🌙', text: 'You are my dream come true, my Kuttyma', tamil: 'நீ என் கனவு நனவானது, என் Kuttyma 🌙' },
  { emoji: '🌺', text: 'You bloom beauty in everything, Chellamee', tamil: 'நீ எல்லாவற்றிலும் அழகை மலர வைக்கிறாய், Chellamee 🌺' },
  { emoji: '🌊', text: 'My love for you is deeper than any ocean', tamil: 'உன் மீதான என் காதல் எந்த கடலையும் விட ஆழமானது 🌊' },
  { emoji: '⭐', text: 'You are my guiding star, Thangoo', tamil: 'நீ என் வழிகாட்டும் நட்சத்திரம், Thangoo ⭐' },
  { emoji: '❤️‍🔥', text: 'You set my heart on fire, Paapuu', tamil: 'நீ என் இதயத்தை பற்ற வைக்கிறாய், Paapuu ❤️‍🔥' }
]

function WishCarousel() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((p) => (p + 1) % WISHES.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e) {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) setActive((p) => (p + 1) % WISHES.length)
      else setActive((p) => (p - 1 + WISHES.length) % WISHES.length)
    }
  }

  return (
    <div className="wish-carousel">
      <h3>💋 Love Wishes for {MAIN_NAME} 💋</h3>
      <div className="wish-card" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <span className="wish-emoji">{WISHES[active].emoji}</span>
        <p className="wish-text">{WISHES[active].text}</p>
        <p className="wish-tamil">{WISHES[active].tamil}</p>
      </div>
      <div className="wish-dots">
        {WISHES.map((_, i) => (
          <button key={i} className={'dot' + (i === active ? ' active' : '')}
            onClick={() => setActive(i)} aria-label={`Wish ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════
// LOVE QUIZ (PERSONALIZED)
// ═══════════════════════════════════════
const QUIZ_QUESTIONS = [
  { q: 'What does 💝 mean?', options: ['Gift Heart', 'Broken Heart', 'Blue Heart'], answer: 0 },
  { q: 'காதலர் தினம் எந்த மாதம்?', options: ['January', 'February', 'March'], answer: 1 },
  { q: `${MAIN_NAME} is my...?`, options: ['Friend', 'Everything 💕', 'Neighbor'], answer: 1 },
  { q: 'Who is the Greek god of love?', options: ['Zeus', 'Eros', 'Apollo'], answer: 1 },
  { q: `How much do I love ${MAIN_NAME}?`, options: ['A lot', 'More than anything', 'Infinity ∞ 💕'], answer: 2 },
  { q: 'Which bird symbolizes love?', options: ['Eagle', 'Dove', 'Parrot'], answer: 1 },
  { q: '"Uyire Uyire" is from which movie?', options: ['Bombay', 'Roja', 'Dil Se'], answer: 0 },
  { q: `${MAIN_NAME}'s smile is like...?`, options: ['Sunshine ☀️', 'Moon 🌙', 'Both! ☀️🌙✨'], answer: 2 },
  { q: 'What color represents Valentine\'s Day?', options: ['Blue', 'Green', 'Red ❤️'], answer: 2 },
  { q: `I want to give ${MAIN_NAME}...?`, options: ['Nothing', 'The whole world 🌍💕', 'Just hi'], answer: 1 }
]

function LoveQuiz({ onComplete }) {
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [selected, setSelected] = useState(-1)
  const [showAnswer, setShowAnswer] = useState(false)

  function handleAnswer(idx) {
    if (showAnswer) return
    setSelected(idx)
    setShowAnswer(true)
    if (idx === QUIZ_QUESTIONS[step].answer) setScore((s) => s + 1)
    setTimeout(() => {
      setShowAnswer(false)
      setSelected(-1)
      if (step < QUIZ_QUESTIONS.length - 1) setStep((s) => s + 1)
      else {
        setDone(true)
        if (onComplete) onComplete()
      }
    }, 1200)
  }

  function reset() {
    setStep(0); setScore(0); setDone(false); setSelected(-1); setShowAnswer(false)
  }

  if (done) {
    const emoji = score >= 9 ? '🏆' : score >= 7 ? '🎉' : score >= 5 ? '😊' : '💗'
    const msg = score >= 9 ? `🎉 Perfect! You truly know ${MAIN_NAME}! 💘💋` :
      score >= 7 ? `😘 Amazing! Love is strong for ${MAIN_NAME}! 💕` :
      score >= 5 ? `💋 Good try! Keep loving ${MAIN_NAME}! 🌹` :
      `💕 Love for ${MAIN_NAME} is a beautiful journey! 🦋`

    return (
      <div className="quiz-result">
        <span className="result-emoji">{emoji}</span>
        <h3>💋 Quiz Complete! 💋</h3>
        <p className="quiz-score">{score}/{QUIZ_QUESTIONS.length}</p>
        <p className="result-msg">{msg}</p>
        <button className="btn-glow" onClick={reset}>Try Again 💋🔄</button>
      </div>
    )
  }

  return (
    <div className="love-quiz">
      <h3>💋 Love Quiz for {MAIN_NAME} 💋</h3>
      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: ((step + 1) / QUIZ_QUESTIONS.length * 100) + '%' }} />
      </div>
      <p className="quiz-progress">Question {step + 1} of {QUIZ_QUESTIONS.length}</p>
      <p className="quiz-question">{QUIZ_QUESTIONS[step].q}</p>
      <div className="quiz-options">
        {QUIZ_QUESTIONS[step].options.map((opt, i) => {
          let cls = 'quiz-btn'
          if (showAnswer) {
            if (i === QUIZ_QUESTIONS[step].answer) cls += ' correct'
            else if (i === selected) cls += ' wrong'
          }
          return (
            <button key={i} className={cls} onClick={() => handleAnswer(i)} disabled={showAnswer}>
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════
// LOVE PROMISES (PERSONALIZED)
// ═══════════════════════════════════════
const PROMISES = [
  { emoji: '💋', text: `I promise to kiss ${MAIN_NAME} every morning`, tamil: 'தினமும் காலையில் முத்தம் தருவேன் 😘' },
  { emoji: '🤗', text: `I promise to hug my Paapuu every single day`, tamil: 'தினமும் என் Paapuu-வை கட்டி அணைப்பேன்' },
  { emoji: '👂', text: `I promise to always listen to my Chellamee`, tamil: 'எப்போதும் என் Chellamee பேச்சை கேட்பேன்' },
  { emoji: '😂', text: `I promise to make my Thangoo laugh`, tamil: 'என் Thangoo-வை சிரிக்க வைப்பேன்' },
  { emoji: '🍳', text: `I promise to cook ${MAIN_NAME}'s favorite meals`, tamil: 'Kuttyma-க்கு பிடித்த உணவு சமைப்பேன்' },
  { emoji: '🌙', text: `I promise to say goodnight with a kiss 💋`, tamil: 'தினமும் முத்தத்துடன் இனிய இரவு சொல்வேன் 😘' },
  { emoji: '☀️', text: `I promise to be ${MAIN_NAME}'s sunshine`, tamil: 'Kuttyma வாழ்வின் சூரிய ஒளியாக இருப்பேன்' },
  { emoji: '💪', text: `I promise to always be Paapuu's strength`, tamil: 'எப்போதும் Paapuu-வின் பலமாக இருப்பேன்' },
  { emoji: '🛡️', text: `I promise to protect Chellamee's heart`, tamil: 'Chellamee இதயத்தை காப்பேன்' },
  { emoji: '🌍', text: `I promise to explore the world with Thangoo`, tamil: 'Thangoo-வுடன் உலகை சுற்றுவேன்' },
  { emoji: '💃', text: `I promise to dance with ${MAIN_NAME} in the rain`, tamil: 'மழையில் Kuttyma-வுடன் நடனமாடுவேன்' },
  { emoji: '😘', text: `I promise unlimited kisses for ${MAIN_NAME}`, tamil: 'Kuttyma-க்கு அளவில்லா முத்தங்கள் 💋💋💋' }
]

function LovePromises() {
  return (
    <div className="promises-section">
      <h3>💋 My Promises to {MAIN_NAME} 💋</h3>
      <div className="promises-grid">
        {PROMISES.map((p, i) => (
          <div key={i} className="promise-card" style={{ animationDelay: (i * 0.08) + 's' }}>
            <span className="promise-emoji">{p.emoji}</span>
            <p className="promise-text">{p.text}</p>
            <p className="promise-tamil">{p.tamil}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════
// MEMORY WALL
// ═══════════════════════════════════════
const MEMORIES = [
  { emoji: '🎡', text: 'Our first date', tamil: 'நம் முதல் சந்திப்பு', bg: '#ff6b6b' },
  { emoji: '💋', text: 'First kiss', tamil: 'முதல் முத்தம் 😘', bg: '#ff0844' },
  { emoji: '🎬', text: 'Movie nights', tamil: 'சினிமா இரவுகள்', bg: '#ee5a24' },
  { emoji: '🏖️', text: 'Beach sunsets', tamil: 'கடற்கரை சூரிய அஸ்தமனம்', bg: '#f0932b' },
  { emoji: '🎂', text: 'Birthdays', tamil: 'பிறந்தநாள் கொண்டாட்டம்', bg: '#eb4d4b' },
  { emoji: '🌧️', text: 'Dancing in rain', tamil: 'மழையில் நடனம்', bg: '#e056a0' },
  { emoji: '😘', text: 'Surprise kisses', tamil: 'ஆச்சர்ய முத்தங்கள் 💋', bg: '#ff4757' },
  { emoji: '⛄', text: 'Winter cuddles', tamil: 'குளிர்கால அரவணைப்பு', bg: '#c44569' },
  { emoji: '🎄', text: 'Christmas magic', tamil: 'கிறிஸ்துமஸ் மந்திரம்', bg: '#cf6a87' },
  { emoji: '🌅', text: 'Watching sunrises', tamil: 'சூரிய உதயம்', bg: '#e66767' },
  { emoji: '✈️', text: 'Adventures', tamil: 'சாகச பயணங்கள்', bg: '#fd79a8' },
  { emoji: '🍕', text: 'Cooking together', tamil: 'ஒன்றாக சமைத்தல்', bg: '#e17055' },
  { emoji: '💏', text: 'Romantic moments', tamil: 'காதல் தருணங்கள் 💕', bg: '#d63031' },
  { emoji: '🎤', text: 'Singing together', tamil: 'ஒன்றாக பாடுதல்', bg: '#6c5ce7' },
  { emoji: '🤗', text: 'Long hugs', tamil: 'நீண்ட அரவணைப்பு', bg: '#00b894' }
]

function MemoryWall() {
  const [flipped, setFlipped] = useState([])

  function toggleFlip(i) {
    setFlipped((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    )
  }

  return (
    <div className="memory-wall">
      <h3>📸💋 Our Memories with {MAIN_NAME} 💋📸</h3>
      <p className="section-subtitle">Tap cards to flip! 😘</p>
      <div className="memory-grid">
        {MEMORIES.map((m, i) => (
          <div key={i} className={'memory-card-wrapper' + (flipped.includes(i) ? ' flipped' : '')}
            onClick={() => toggleFlip(i)}
            style={{ animationDelay: (i * 0.06) + 's' }}
            role="button" tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleFlip(i) }}
            aria-label={`Memory: ${m.text}`}>
            <div className="memory-card-inner">
              <div className="memory-card-front" style={{ backgroundColor: m.bg }}>
                <span className="memory-emoji">{m.emoji}</span>
                <p>{m.text}</p>
              </div>
              <div className="memory-card-back" style={{ backgroundColor: m.bg }}>
                <span className="memory-emoji">{m.emoji}</span>
                <p className="memory-tamil">{m.tamil}</p>
                <p className="memory-love">💋💕</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="memory-count">💋 {flipped.length}/{MEMORIES.length} memories flipped!</p>
    </div>
  )
}

// ═══════════════════════════════════════
// REASONS I LOVE YOU (PERSONALIZED)
// ═══════════════════════════════════════
const REASONS = [
  { emoji: '😊', text: `${MAIN_NAME}'s beautiful smile`, tamil: 'Kuttyma-வின் அழகான புன்னகை' },
  { emoji: '😂', text: `${MAIN_NAME}'s amazing laugh`, tamil: 'Kuttyma-வின் அற்புதமான சிரிப்பு' },
  { emoji: '💪', text: 'Your inner strength, Paapuu', tamil: 'உன் வலிமை, Paapuu' },
  { emoji: '🧠', text: `${MAIN_NAME}'s brilliant mind`, tamil: 'Kuttyma-வின் புத்திசாலித்தனம்' },
  { emoji: '💛', text: 'Your kind heart, Chellamee', tamil: 'உன் கருணை இதயம், Chellamee' },
  { emoji: '👀', text: `${MAIN_NAME}'s gorgeous eyes`, tamil: 'Kuttyma-வின் அழகான கண்கள் 😍' },
  { emoji: '💋', text: 'Your sweet kisses, Paapuu', tamil: 'உன் இனிய முத்தங்கள், Paapuu 😘' },
  { emoji: '🎵', text: `${MAIN_NAME}'s sweet voice`, tamil: 'Kuttyma-வின் இனிய குரல்' },
  { emoji: '✨', text: 'Everything about you, Thangoo', tamil: 'உன் எல்லாமே, Thangoo 👑' },
  { emoji: '🌟', text: `${MAIN_NAME}'s inner light`, tamil: 'Kuttyma-வின் உள் ஒளி' },
  { emoji: '🤗', text: `${MAIN_NAME}'s warm hugs`, tamil: 'Kuttyma-வின் அரவணைப்பு' },
  { emoji: '🫶', text: `${MAIN_NAME}'s pure love`, tamil: 'Kuttyma-வின் தூய்மையான காதல் ❤️‍🔥' }
]

function ReasonsILoveYou() {
  const [revealed, setRevealed] = useState([])

  function toggleReveal(index) {
    setRevealed((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    )
  }

  return (
    <div className="reasons-section">
      <h3>💋 Why I Love {MAIN_NAME} 💋</h3>
      <p className="section-subtitle">Tap each heart to reveal! 😘</p>
      <div className="reasons-grid">
        {REASONS.map((r, i) => (
          <div key={i} className={'reason-card' + (revealed.includes(i) ? ' revealed' : '')}
            onClick={() => toggleReveal(i)}
            style={{ animationDelay: (i * 0.06) + 's' }}
            role="button" tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleReveal(i) }}>
            {!revealed.includes(i) ? (
              <>
                <span className="reason-heart">💋</span>
                <p className="reason-num">#{i + 1}</p>
              </>
            ) : (
              <>
                <span className="reason-emoji">{r.emoji}</span>
                <p className="reason-text">{r.text}</p>
                <p className="reason-tamil">{r.tamil}</p>
              </>
            )}
          </div>
        ))}
      </div>
      <div className="revealed-count">
        💋 {revealed.length}/{REASONS.length} reasons revealed!
      </div>
    </div>
  )
}

// ═══════════════════════════════════════
// LOVE POEMS (PERSONALIZED)
// ═══════════════════════════════════════
const POEMS = [
  {
    title: '🌹 Kuttyma காதல் கவிதை 🌹',
    lines: [
      'என் Kuttyma கண்களில் நான் கண்டேன் 👀',
      'என் வாழ்வின் அர்த்தத்தை... 💕',
      'என் Paapuu புன்னகையில் நான் உணர்ந்தேன் 😊',
      'என் இதயத்தின் துடிப்பை... 💓',
      'நீ என் காதல், என் உயிர், என் முத்தம் 💋💕'
    ]
  },
  {
    title: '💋 Kiss Poem for Chellamee 💋',
    lines: [
      'In your eyes I found my home, Chellamee 🏠',
      'In your arms I found my peace 🤗',
      'In your kiss I found my love 💋',
      'In your heart I found my life 💕',
      'You are my everything, Chellamee 💝😘'
    ]
  },
  {
    title: '👑 Thangoo நிலவே 👑',
    lines: [
      'என் Thangoo நிலவே என் நிலவே 🌙',
      'உன் ஒளியில் நான் வாழ்கிறேன் ✨',
      'என் Kuttyma காற்றே என் காற்றே 🌬️',
      'உன் மூச்சில் நான் சுவாசிக்கிறேன் 💨',
      'என்றும் உன்னவன், உன் முத்தங்கள் எனக்கே 💋😘❤️‍🔥'
    ]
  },
  {
    title: '😘 Paapuu Love 😘',
    lines: [
      'Paapuu, you are my morning sun ☀️',
      'My evening star, my midnight moon 🌙',
      'Every kiss I give you is a promise 💋',
      'Every hug is my forever vow 🤗',
      'I love you, Paapuu, now and always 💕😘💋'
    ]
  }
]

function LovePoem() {
  const [poemIndex, setPoemIndex] = useState(0)

  return (
    <div className="poem-section">
      <div className="poem-card">
        <h3>{POEMS[poemIndex].title}</h3>
        {POEMS[poemIndex].lines.map((line, i) => (
          <p key={`${poemIndex}-${i}`} className="poem-line" style={{ animationDelay: (i * 0.3) + 's' }}>
            {line}
          </p>
        ))}
      </div>
      <div className="poem-nav">
        {POEMS.map((_, i) => (
          <button key={i} className={'poem-dot' + (i === poemIndex ? ' active' : '')}
            onClick={() => setPoemIndex(i)} aria-label={`Poem ${i + 1}`}>
            {['🌹', '💋', '👑', '😘'][i]}
          </button>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════
// LOVE CALCULATOR (PRE-FILLED)
// ═══════════════════════════════════════
function LoveCalculator() {
  const [name1, setName1] = useState(MAIN_NAME)
  const [name2, setName2] = useState('')
  const [result, setResult] = useState(null)
  const [calculating, setCalculating] = useState(false)

  function calculate() {
    if (name1.trim() && name2.trim()) {
      setCalculating(true)
      setResult(null)
      setTimeout(() => {
        const combined = (name1 + name2).toLowerCase()
        let sum = 0
        for (let i = 0; i < combined.length; i++) sum += combined.charCodeAt(i)
        const percentage = 85 + (sum % 16) // Always 85-100% for Kuttyma 💕
        setResult(percentage)
        setCalculating(false)
      }, 2000)
    }
  }

  const resultMsg = result >= 95 ? `🔥💋 ETERNAL SOULMATES! ${MAIN_NAME} & you are destined! 💋🔥` :
    result >= 90 ? `💋💝 PERFECT MATCH! ${MAIN_NAME} உன் காதல் அலாதியானது! 😘` :
    `💕💋 BEAUTIFUL LOVE! ${MAIN_NAME} அழகான காதல்! 🌹`

  return (
    <div className="love-calc">
      <h3>💋 Love Calculator for {MAIN_NAME} 💋</h3>
      <div className="calc-inputs">
        <input type="text" placeholder={`${MAIN_NAME}'s name 💋`} value={name1}
          onChange={(e) => setName1(e.target.value)} className="calc-input"
          onKeyDown={(e) => { if (e.key === 'Enter') calculate() }} />
        <span className="calc-heart">💋😘💕</span>
        <input type="text" placeholder="Your name 💕" value={name2}
          onChange={(e) => setName2(e.target.value)} className="calc-input"
          onKeyDown={(e) => { if (e.key === 'Enter') calculate() }} />
      </div>
      <button className="btn-glow calc-btn" onClick={calculate}
        disabled={calculating || !name1.trim() || !name2.trim()}>
        {calculating ? '💋 Calculating...' : '💋 Calculate Love 😘'}
      </button>
      {calculating && (
        <div className="calc-loading">
          <span className="loading-heart">💋</span>
          <p>Measuring {MAIN_NAME}'s love... 😘</p>
        </div>
      )}
      {result !== null && !calculating && (
        <div className="calc-result">
          <div className="result-circle">
            <span className="result-percent">{result}%</span>
          </div>
          <p className="result-text">{resultMsg}</p>
          <div className="result-emojis">
            {['💋','😘','❤️‍🔥','💕','💖','💗','💘','💝','🌹','✨','🫶','👄'].map((e, i) => (
              <span key={i} className="res-emoji" style={{ animationDelay: (i * 0.12) + 's' }}>{e}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════
// EMOJI SHOWCASE (MORE KISS/LOVE)
// ═══════════════════════════════════════
const FEELINGS = [
  { emoji: '🥰', text: 'So Loved', tamil: 'நேசிக்கப்பட்ட' },
  { emoji: '😍', text: 'Amazed', tamil: 'வியப்பு' },
  { emoji: '💋', text: 'Kissed', tamil: 'முத்தம்' },
  { emoji: '😘', text: 'Adored', tamil: 'வணங்கப்பட்ட' },
  { emoji: '🤩', text: 'Starstruck', tamil: 'ஆச்சர்யம்' },
  { emoji: '😊', text: 'Happy', tamil: 'மகிழ்ச்சி' },
  { emoji: '🥳', text: 'Celebrating', tamil: 'கொண்டாட்டம்' },
  { emoji: '🤗', text: 'Hugged', tamil: 'அரவணைப்பு' },
  { emoji: '🫠', text: 'Melting', tamil: 'உருகுதல்' },
  { emoji: '🥹', text: 'Touched', tamil: 'நெகிழ்ச்சி' },
  { emoji: '❤️‍🔥', text: 'On Fire', tamil: 'தீப்பற்றிய காதல்' },
  { emoji: '🫶', text: 'Heart Hands', tamil: 'இதய கைகள்' },
  { emoji: '💏', text: 'Romantic', tamil: 'காதல் தருணம்' },
  { emoji: '🦋', text: 'Butterflies', tamil: 'பட்டாம்பூச்சி' },
  { emoji: '🌸', text: 'Blooming', tamil: 'மலர்ச்சி' },
  { emoji: '👄', text: 'Lips', tamil: 'உதடுகள்' }
]

function EmojiShowcase() {
  return (
    <div className="emoji-showcase">
      <h3>💋 {MAIN_NAME} Makes Me Feel 😘</h3>
      <div className="emoji-grid">
        {FEELINGS.map((item, i) => (
          <div key={i} className="emoji-item" style={{ animationDelay: (i * 0.07) + 's' }}>
            <span className="emoji-big">{item.emoji}</span>
            <p className="emoji-eng">{item.text}</p>
            <p className="emoji-tamil">{item.tamil}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════
// LOVE METER
// ═══════════════════════════════════════
function LoveMeter() {
  const [level, setLevel] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setLevel(100), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="love-meter">
      <h3>💋 Love Meter for {MAIN_NAME} 💋</h3>
      <div className="meter-bar">
        <div className="meter-fill" style={{ width: level + '%' }}>
          <span>INFINITE LOVE ∞ 💋</span>
        </div>
      </div>
      <p>My love for {MAIN_NAME} cannot be measured! என் Kuttyma-க்கான காதலுக்கு அளவே இல்லை! 💋😘💝</p>
    </div>
  )
}

// ═══════════════════════════════════════
// LOVE TIMELINE (PERSONALIZED)
// ═══════════════════════════════════════
const TIMELINE_EVENTS = [
  { emoji: '👀', title: 'First Glance', desc: `The moment I first saw ${MAIN_NAME}`, tamil: 'முதல் பார்வை 😍', period: 'Day 1' },
  { emoji: '💬', title: 'First Chat', desc: `When I first talked to ${MAIN_NAME}`, tamil: 'முதல் உரையாடல்', period: 'Week 1' },
  { emoji: '☕', title: 'First Date', desc: `Coffee and butterflies with ${MAIN_NAME}`, tamil: 'முதல் சந்திப்பு 🦋', period: 'Month 1' },
  { emoji: '💋', title: 'First Kiss', desc: `The magical first kiss with ${MAIN_NAME}`, tamil: 'முதல் முத்தம் 😘', period: 'Month 2' },
  { emoji: '💕', title: 'First "I Love You"', desc: `Saying I love you to ${MAIN_NAME}`, tamil: '"நான் உன்னை நேசிக்கிறேன்" 💝', period: 'Month 3' },
  { emoji: '🌹', title: 'First Valentine', desc: `Our special day, ${MAIN_NAME}`, tamil: 'முதல் காதலர் தினம் 💋', period: 'Feb 14' },
  { emoji: '🏠', title: 'Meeting Family', desc: `${MAIN_NAME} became part of family`, tamil: 'குடும்பத்தை சந்தித்தல்', period: 'Month 6' },
  { emoji: '✈️', title: 'First Trip', desc: `Adventures with ${MAIN_NAME}`, tamil: 'முதல் பயணம்', period: 'Month 8' },
  { emoji: '💍', title: 'Forever Promise', desc: `Together forever, ${MAIN_NAME}`, tamil: 'நிரந்தர வாக்குறுதி 💋😘', period: 'Forever' }
]

function LoveTimeline() {
  return (
    <div className="timeline-section">
      <div className="timeline">
        {TIMELINE_EVENTS.map((event, i) => (
          <div key={i} className="timeline-item" style={{ animationDelay: (i * 0.15) + 's' }}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-emoji">{event.emoji}</span>
              <p className="timeline-title">{event.title} — <small>{event.period}</small></p>
              <p className="timeline-desc">{event.desc}</p>
              <p className="timeline-tamil">{event.tamil}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════
// KISS COUNTER (NEW FEATURE!)
// ═══════════════════════════════════════
function KissCounter({ count, onKiss }) {
  return (
    <div className="kiss-counter-section">
      <h3>💋 Kiss Counter for {MAIN_NAME} 💋</h3>
      <div className="kiss-counter-card" onClick={onKiss} role="button" tabIndex={0}>
        <span className="kiss-big-emoji">💋</span>
        <p className="kiss-count">{count}</p>
        <p className="kiss-label">kisses sent to {MAIN_NAME}! 😘</p>
        <p className="kiss-tap">Tap to send a kiss! 💋</p>
      </div>
      <div className="kiss-milestones">
        {count >= 10 && <span className="kiss-badge">🏅 10 Kisses!</span>}
        {count >= 50 && <span className="kiss-badge">🥈 50 Kisses!</span>}
        {count >= 100 && <span className="kiss-badge">🥇 100 Kisses!</span>}
        {count >= 500 && <span className="kiss-badge">👑 500 Kisses!</span>}
        {count >= 1000 && <span className="kiss-badge">💎 1000 Kisses!</span>}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════
// 🎵 SONGS DATA - UPDATED
// ═══════════════════════════════════════
const SONGS = [
  // YOUR REQUESTED SONGS FIRST
  { title: 'Manmadhane Nee', artist: 'Yuvan Shankar Raja', movie: 'Manmadhan', emoji: '🔥', tamil: 'மன்மதனே நீ கலைஞன் தான்' },
  { title: 'Thaaliye Thevai Illai', artist: 'Yuvan Shankar Raja', movie: 'Manmadhan', emoji: '💍', tamil: 'தாலியே தேவை இல்லை' },
  // TAMIL LOVE SONGS
  { title: 'Uyire Uyire', artist: 'A.R. Rahman', movie: 'Bombay', emoji: '🎵', tamil: 'உயிரே உயிரே' },
  { title: 'Kannathil Muthamittal', artist: 'A.R. Rahman', movie: 'Kannathil Muthamittal', emoji: '💋', tamil: 'கன்னத்தில் முத்தமிட்டால்' },
  { title: 'Munbe Vaa', artist: 'A.R. Rahman', movie: 'Sillunu Oru Kadhal', emoji: '😘', tamil: 'முன்பே வா' },
  { title: 'Venmathi Venmathiye', artist: 'Yuvan Shankar Raja', movie: 'Minnale', emoji: '🌙', tamil: 'வெண்மதி வெண்மதியே' },
  { title: 'En Kadhal Solla', artist: 'Yuvan Shankar Raja', movie: 'Paiyaa', emoji: '💕', tamil: 'என் காதல் சொல்ல' },
  { title: 'Nenjukkul Peidhidum', artist: 'Harris Jayaraj', movie: 'Vaaranam Aayiram', emoji: '🌧️', tamil: 'நெஞ்சுக்குள் பெய்திடும்' },
  { title: 'Kadhal En Kadhal', artist: 'Yuvan Shankar Raja', movie: 'Mayakkam Enna', emoji: '❤️‍🔥', tamil: 'காதல் என் காதல்' },
  { title: 'Idhazhin Oram', artist: 'Ajesh Ashok', movie: '3 (Moonu)', emoji: '💔', tamil: 'இதழின் ஓரம்' },
  { title: 'Kannazhaga', artist: 'Dhanush', movie: '3 (Moonu)', emoji: '👁️', tamil: 'கண்ணாழகா' },
  { title: 'Thalli Pogathey', artist: 'Sid Sriram', movie: 'Achcham Yenbadhu Madamaiyadaa', emoji: '🎤', tamil: 'தள்ளி போகாதே' },
  { title: 'Maruvaarthai', artist: 'Sid Sriram', movie: 'Enai Noki Paayum Thota', emoji: '🎻', tamil: 'மறுவார்த்தை' },
  { title: 'Oru Kadhal Devathai', artist: 'A.R. Rahman', movie: 'Kadal Desam', emoji: '🧚', tamil: 'ஒரு காதல் தேவதை' },
  { title: 'Ennai Konjam', artist: 'Sid Sriram', movie: 'Kaakha Kaakha', emoji: '💕', tamil: 'என்னை கொஞ்சம்' },
  { title: 'Kadhal Rojave', artist: 'A.R. Rahman', movie: 'Roja', emoji: '🌹', tamil: 'காதல் ரோஜாவே' },
  { title: 'Enna Solla Pogirai', artist: 'A.R. Rahman', movie: 'Kandukondain Kandukondain', emoji: '🎶', tamil: 'என்ன சொல்ல போகிறாய்' },
  { title: 'Snehithane', artist: 'A.R. Rahman', movie: 'Alaipayuthey', emoji: '💗', tamil: 'ஸ்நேகிதனே' },
  { title: 'Pachai Nirame', artist: 'A.R. Rahman', movie: 'Alaipayuthey', emoji: '🌿', tamil: 'பச்சை நிறமே' },
  { title: 'Poo Nee Poo', artist: 'Yuvan Shankar Raja', movie: '3 (Moonu)', emoji: '🌸', tamil: 'பூ நீ பூ' },
  { title: 'Nee Paartha Vizhigal', artist: 'Yuvan Shankar Raja', movie: '3 (Moonu)', emoji: '😍', tamil: 'நீ பார்த்த விழிகள்' },
  { title: 'Oh Penne', artist: 'Anirudh', movie: 'Vanakkam Chennai', emoji: '🎵', tamil: 'ஓ பெண்ணே' },
  { title: 'Yaaro Ivan', artist: 'Yuvan Shankar Raja', movie: 'Deepavali', emoji: '🪔', tamil: 'யாரோ இவன்' },
  { title: 'Unakkum Enakkum', artist: 'D. Imman', movie: 'Unakkum Enakkum', emoji: '💑', tamil: 'உனக்கும் எனக்கும்' },
  { title: 'Kadhalane Kadhalane', artist: 'A.R. Rahman', movie: 'Indian', emoji: '❤️', tamil: 'காதலனே காதலனே' },
  { title: 'Putham Pudhu Kaalai', artist: 'Ilaiyaraaja', movie: 'Alaigal Oivathillai', emoji: '🌅', tamil: 'புத்தம் புது காலை' },
  { title: 'Thodu Vaanam', artist: 'D. Imman', movie: 'Anegan', emoji: '☁️', tamil: 'தொடு வானம்' },
  { title: 'Thaandhi Thaandhi', artist: 'D. Imman', movie: 'Petta', emoji: '💃', tamil: 'தாண்டி தாண்டி' },
  { title: 'Kaadhal Oru Vizhiyil', artist: 'G.V. Prakash', movie: 'Kanchana 2', emoji: '👁️', tamil: 'காதல் ஒரு விழியில்' },
  { title: 'Kaadhal Mannan', artist: 'S.P. Balasubrahmanyam', movie: 'Kaadhal Mannan', emoji: '👑', tamil: 'காதல் மன்னன்' },
  // ENGLISH LOVE SONGS
  { title: 'Perfect', artist: 'Ed Sheeran', movie: 'Divide Album', emoji: '🎸', tamil: '' },
  { title: 'All of Me', artist: 'John Legend', movie: 'Love Album', emoji: '🎹', tamil: '' },
  { title: 'Thinking Out Loud', artist: 'Ed Sheeran', movie: 'x Album', emoji: '🎵', tamil: '' },
  { title: 'A Thousand Years', artist: 'Christina Perri', movie: 'Twilight', emoji: '🎶', tamil: '' },
  { title: 'Just the Way You Are', artist: 'Bruno Mars', movie: 'Doo-Wops & Hooligans', emoji: '🎤', tamil: '' },
  { title: 'Love Story', artist: 'Taylor Swift', movie: 'Fearless', emoji: '📖', tamil: '' },
  { title: 'Photograph', artist: 'Ed Sheeran', movie: 'x Album', emoji: '📸', tamil: '' },
  { title: 'Say You Won\'t Let Go', artist: 'James Arthur', movie: 'Back from the Edge', emoji: '🤝', tamil: '' },
  { title: 'Shallow', artist: 'Lady Gaga & Bradley Cooper', movie: 'A Star Is Born', emoji: '⭐', tamil: '' },
  { title: 'I Don\'t Want to Miss a Thing', artist: 'Aerosmith', movie: 'Armageddon', emoji: '🌠', tamil: '' }
]

// ═══════════════════════════════════════
// GIFTS DATA (PERSONALIZED)
// ═══════════════════════════════════════
const GIFTS = [
  { emoji: '💋', boxEmoji: '🎁', message: `Unlimited kisses for ${MAIN_NAME}!`, tamil: 'Kuttyma-க்கு எல்லையில்லா முத்தங்கள்! 😘', hint: 'Something sweet 💋' },
  { emoji: '🧸', boxEmoji: '🎁', message: `A teddy bear for my Paapuu!`, tamil: 'என் Paapuu-க்கு கரடி!', hint: 'Something cuddly' },
  { emoji: '💐', boxEmoji: '🎁', message: `Beautiful flowers for Chellamee!`, tamil: 'Chellamee-க்கான பூக்கள்!', hint: 'Something fragrant' },
  { emoji: '🍫', boxEmoji: '🎁', message: `Sweet chocolates for my Thangoo!`, tamil: 'என் Thangoo-க்கு சாக்லேட்!', hint: 'Something sweet' },
  { emoji: '💍', boxEmoji: '🎁', message: `A ring for ${MAIN_NAME} forever!`, tamil: 'Kuttyma-க்கு மோதிரம்!', hint: 'Something precious' },
  { emoji: '👄', boxEmoji: '🎁', message: `Lipstick kisses for ${MAIN_NAME}!`, tamil: 'Kuttyma-க்கு முத்த அடையாளங்கள்! 💋', hint: 'Lips 💋' },
  { emoji: '📖', boxEmoji: '🎁', message: `Our memory book, ${MAIN_NAME}!`, tamil: 'நம் நினைவுகள் புத்தகம்!', hint: 'Something to read' },
  { emoji: '⌚', boxEmoji: '🎁', message: `Every second with ${MAIN_NAME} counts!`, tamil: 'Kuttyma-வுடன் ஒவ்வொரு நொடியும்!', hint: 'About time' },
  { emoji: '💎', boxEmoji: '🎁', message: `${MAIN_NAME} is my diamond!`, tamil: 'Kuttyma என் வைரம்!', hint: 'Sparkly' },
  { emoji: '🎨', boxEmoji: '🎁', message: `Paint our dreams, ${MAIN_NAME}!`, tamil: 'நம் கனவுகளை வரைவோம்!', hint: 'Colorful' },
  { emoji: '🎧', boxEmoji: '🎁', message: `Our love songs, ${MAIN_NAME}!`, tamil: 'நம் காதல் பாடல்கள்!', hint: 'Musical' },
  { emoji: '🌹', boxEmoji: '🎁', message: `1000 roses for ${MAIN_NAME}!`, tamil: 'Kuttyma-க்கு 1000 ரோஜாக்கள்!', hint: 'Classic romance 🌹' },
  { emoji: '✈️', boxEmoji: '🎁', message: `Trip to Paris with ${MAIN_NAME}!`, tamil: 'Kuttyma-வுடன் பாரிஸ்!', hint: 'Travel' },
  { emoji: '📸', boxEmoji: '🎁', message: `Photo album of us, ${MAIN_NAME}!`, tamil: 'நம் புகைப்பட ஆல்பம்!', hint: 'Memories' },
  { emoji: '🎵', boxEmoji: '🎁', message: `A song written for ${MAIN_NAME}!`, tamil: 'Kuttyma-க்காக பாடல்!', hint: 'Melodious' },
  { emoji: '👑', boxEmoji: '🎁', message: `${MAIN_NAME} is my queen!`, tamil: 'Kuttyma என் ராணி! 👑', hint: 'Royal 👑' }
]

// ═══════════════════════════════════════
// SURPRISE MESSAGES
// ═══════════════════════════════════════
const SURPRISE_MESSAGES = [
  { en: `${MAIN_NAME}, you are loved beyond measure! 💋`, ta: 'Kuttyma, நீ அளவிலா நேசிக்கப்படுகிறாய்! 😘' },
  { en: `Paapuu, you mean the world to me! 💋`, ta: 'Paapuu, நீ எனக்கு உலகம்! 😘' },
  { en: `Chellamee, my heart belongs to you forever! 💋`, ta: 'Chellamee, என் இதயம் என்றும் உன்னுடையது! 💋' },
  { en: `Thangoo, you are my everything! 💋`, ta: 'Thangoo, நீ என் எல்லாமே! 👑' },
  { en: `${MAIN_NAME}, I fall deeper in love each day! 💋`, ta: 'Kuttyma, நாள்தோறும் காதல் அதிகரிக்கிறது! 😘' },
  { en: `Paapuu, you complete me! 💋😘`, ta: 'Paapuu, நீ என்னை முழுமையாக்குகிறாய்! 💋' },
  { en: `Chellamee, together forever! 💋`, ta: 'Chellamee, என்றும் ஒன்றாக! 💋😘' },
  { en: `Thangoo, 1000 kisses for you! 💋💋💋`, ta: 'Thangoo, உனக்கு 1000 முத்தங்கள்! 😘😘😘' }
]

// ═══════════════════════════════════════
// NAV ITEMS
// ═══════════════════════════════════════
const NAV_ITEMS = [
  { id: 'home', label: '🏠', full: 'Home' },
  { id: 'letter', label: '💌', full: 'Letter' },
  { id: 'gifts', label: '🎁', full: 'Gifts' },
  { id: 'music', label: '🎵', full: 'Music' },
  { id: 'kisses', label: '💋', full: 'Kisses' },
  { id: 'quiz', label: '💕', full: 'Quiz' },
  { id: 'memories', label: '📸', full: 'Memories' },
  { id: 'promises', label: '🤞', full: 'Promises' },
  { id: 'reasons', label: '💖', full: 'Reasons' },
  { id: 'poems', label: '📝', full: 'Poems' },
  { id: 'timeline', label: '📅', full: 'Timeline' },
  { id: 'calculator', label: '💘', full: 'Love Calc' }
]

// ═══════════════════════════════════════
// ██████ MAIN APP ██████
// ═══════════════════════════════════════
function App() {
  const [section, setSection] = useState('home')
  const [letterOpen, setLetterOpen] = useState(false)
  const [rainEmojis, setRainEmojis] = useState([])
  const [fireworksActive, setFireworksActive] = useState(false)
  const [confettiActive, setConfettiActive] = useState(false)
  const [kissBurstActive, setKissBurstActive] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [surprise, setSurprise] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [kissCount, setKissCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [toasts, setToasts] = useState([])
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  const [giftsOpened, setGiftsOpened] = useState(0)
  const [showWelcome, setShowWelcome] = useState(true)

  // Welcome screen auto-dismiss
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  // Initial celebration
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerFireworks()
      triggerRain()
      triggerConfetti()
      triggerKissBurst()
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  // Scroll tracking
  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 400)
      setNavScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on section change
  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [section])

  // Toast helper
  const showToast = useCallback((message) => {
    const id = Date.now()
    setToasts((prev) => [...prev.slice(-2), { id, message }])
    setTimeout(() => {
      setToasts((prev) => prev.map((t) => t.id === id ? { ...t, hiding: true } : t))
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 300)
    }, 2500)
  }, [])

  const triggerRain = useCallback(() => {
    const emojiList = ['❤️','💕','💖','💗','💘','💝','🌹','✨','🥰','😍','💋','😘','🦋','💐','🌸','💎','👑','❤️‍🔥','🫶','👄','🩷','💏']
    const newRain = []
    for (let i = 0; i < 45; i++) {
      newRain.push({
        id: Date.now() + i,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        x: Math.random() * 100
      })
    }
    setRainEmojis(newRain)
    setTimeout(() => setRainEmojis([]), 4000)
  }, [])

  const triggerFireworks = useCallback(() => {
    setFireworksActive(true)
    setTimeout(() => setFireworksActive(false), 4000)
  }, [])

  const triggerConfetti = useCallback(() => {
    setConfettiActive(true)
    setTimeout(() => setConfettiActive(false), 4000)
  }, [])

  const triggerKissBurst = useCallback(() => {
    setKissBurstActive(true)
    setTimeout(() => setKissBurstActive(false), 3000)
  }, [])

  function handleHeartClick() {
    triggerRain()
    triggerFireworks()
    triggerConfetti()
    triggerKissBurst()
    setSurprise(true)
    setClickCount((c) => c + 1)
    showToast(`💋 ${PET_NAMES[clickCount % PET_NAMES.length]}, I love you! 😘`)
    setTimeout(() => setSurprise(false), 5000)
  }

  function handleKiss() {
    setKissCount((c) => c + 1)
    triggerKissBurst()
    const messages = [
      `💋 Kiss sent to ${MAIN_NAME}! 😘`,
      `😘 Muah! For my Paapuu! 💋`,
      `💋 Chellamee got a kiss! ❤️‍🔥`,
      `😘 Thangoo, this kiss is yours! 👑`,
      `💋💋💋 Triple kiss for Kuttyma!`
    ]
    showToast(messages[kissCount % messages.length])
  }

  function togglePlay() {
    setIsPlaying((p) => !p)
  }

  function handleGiftOpen(index) {
    setGiftsOpened((prev) => prev + 1)
    triggerRain()
    triggerConfetti()
    showToast(`🎁💋 Gift #${index + 1} for ${MAIN_NAME}! 😘`)
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentMsg = SURPRISE_MESSAGES[clickCount % SURPRISE_MESSAGES.length]

  // ═══ WELCOME SPLASH ═══
  if (showWelcome) {
    return (
      <div className="entry-screen">
        <FloatingHearts />
        <KissBurst active={true} />
        <div className="entry-box welcome-splash">
          <div className="entry-rings">💍💋💍</div>
          <span className="entry-heart">💋</span>
          <h1 className="entry-title">Happy Valentine&#39;s Day!</h1>
          <h2 className="entry-title-tamil">இனிய காதலர் தினம்! 💋😘</h2>
          <div className="welcome-names">
            <p className="welcome-for">💝 For My 💝</p>
            <div className="welcome-pet-names">
              {PET_NAMES.map((name, i) => (
                <span key={i} className="welcome-name-item" style={{ animationDelay: (i * 0.3) + 's' }}>
                  {name}
                </span>
              ))}
            </div>
          </div>
          <div className="welcome-loading">
            <span className="loading-kiss">💋</span>
            <p>Loading your surprise... 😘</p>
          </div>
          <div className="entry-emojis">
            {['💋','😘','💕','❤️‍🔥','🌹','💖','🫶','💝','👄','🩷','💗','💏'].map((e, i) => (
              <span key={i} style={{ animationDelay: (i * 0.1) + 's' }}>{e}</span>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ═══ MAIN APP ═══
  return (
    <div className="app">
      <FloatingHearts />
      <SparkleTrail />
      <EmojiRain emojis={rainEmojis} />
      <Fireworks active={fireworksActive} />
      <ConfettiBurst active={confettiActive} />
      <KissBurst active={kissBurstActive} />
      <ToastContainer toasts={toasts} />

      {/* NAV */}
      <nav className={'nav' + (navScrolled ? ' scrolled' : '')} role="navigation">
        <div className="nav-brand" onClick={() => setSection('home')} role="button" tabIndex={0}>
          💋 {MAIN_NAME}'s Valentine 💋
        </div>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? '✖️' : '☰'}
        </button>
        <div className={'nav-links' + (menuOpen ? ' open' : '')} role="menubar">
          {NAV_ITEMS.map((item) => (
            <button key={item.id}
              className={'nav-btn' + (section === item.id ? ' active' : '')}
              onClick={() => setSection(item.id)}
              role="menuitem">
              <span className="nav-icon">{item.label}</span>
              <span className="nav-text">{item.full}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* MAIN */}
      <main className="main-content">

        {/* HOME */}
        {section === 'home' && (
          <div className="home-section fade-in">
            <div className="hero">
              <div className="hero-bg-effect" aria-hidden="true"></div>
              <h1 className="hero-title">
                <span className="glow-text">Happy Valentine&#39;s Day! 💋😘</span>
              </h1>
              <h2 className="hero-title-tamil">
                இனிய காதலர் தினம்! 🌹💋
              </h2>
              <div className="hero-pet-names">
                <p className="hero-for">💝 For My 💝</p>
                <PetNameRotator />
              </div>
              <div className="hero-all-names">
                💋 {ALL_NAMES_TEXT} 💋
              </div>
              <div className="hero-subtitle">
                <TypeWriter
                  text={`Ennoda ${MAIN_NAME}... Nee thaan en uyir, en kadhal, en ellaamey! 💋😘 நான் உன்னை ரொம்ப ரொம்ப காதலிக்கிறேன்! 💕🌹✨💋`}
                  speed={40}
                />
              </div>
              <div className="heartbeat-container" onClick={handleHeartClick}
                role="button" tabIndex={0} aria-label="Click for surprise">
                <div className="heart-glow" aria-hidden="true"></div>
                <span className="heartbeat">💋</span>
                <p>Click to send love! 😘 <span className="click-counter">x{clickCount}</span></p>
              </div>
              {surprise && (
                <div className="surprise-popup">
                  <h2>🎉💋 SURPRISE! 💋🎉</h2>
                  <p className="surprise-en">{currentMsg.en}</p>
                  <p className="surprise-ta">{currentMsg.ta}</p>
                  <div className="surprise-emojis">
                    {['💋','😘','🥰','😍','💕','🌹','💝','🦋','✨','💐','❤️‍🔥','👑','💎','🫶','👄','💏'].map((e, i) => (
                      <span key={i} className="bounce-emoji" style={{ animationDelay: (i * 0.06) + 's' }}>{e}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <CountdownTimer />
            <WishCarousel />
            <LoveMeter />
            <EmojiShowcase />
          </div>
        )}

        {section === 'letter' && (
          <div className="letter-section fade-in">
            <h2 className="section-title">💌💋 Love Letter for {MAIN_NAME} 💋💌</h2>
            <LoveLetter isOpen={letterOpen} onToggle={() => setLetterOpen(!letterOpen)} />
          </div>
        )}

        {section === 'gifts' && (
          <div className="gifts-section fade-in">
            <h2 className="section-title">🎁💋 Gifts for {MAIN_NAME} 💋🎁</h2>
            <p className="section-subtitle">Click each gift for {MAIN_NAME}! 😘</p>
            <div className="gifts-grid">
              {GIFTS.map((gift, i) => (
                <GiftBox key={i} gift={gift} index={i} onOpen={handleGiftOpen} />
              ))}
            </div>
            <div className="gifts-progress">
              <p>🎁💋 {giftsOpened}/{GIFTS.length} gifts opened for {MAIN_NAME}!</p>
              <div className="gifts-progress-bar">
                <div className="gifts-progress-fill" style={{ width: (giftsOpened / GIFTS.length * 100) + '%' }} />
              </div>
            </div>
          </div>
        )}

        {section === 'music' && (
          <div className="music-section fade-in">
            <h2 className="section-title">🎵💋 {MAIN_NAME}'s Love Songs 💋🎵</h2>
            <MusicPlayer songs={SONGS} currentSong={currentSong} setCurrent={setCurrentSong}
              isPlaying={isPlaying} togglePlay={togglePlay} />
            <div className="dedicate-box">
              <h3>💋 Song Dedication 💋</h3>
              <p>Dear {MAIN_NAME}, this playlist is dedicated to you! 🎶💋😘</p>
              <p>Ennoda Kuttyma, Paapuu, Chellamee, Thangoo... every song is for you! 💕</p>
              <p className="dedicate-tamil">என் Kuttyma, இந்த பாடல்கள் உனக்காக! 🌹💋</p>
            </div>
          </div>
        )}

        {section === 'kisses' && (
          <div className="kisses-page fade-in">
            <h2 className="section-title">💋😘 Kiss Corner for {MAIN_NAME} 😘💋</h2>
            <p className="section-subtitle">Send unlimited kisses to your love! 💋</p>
            <KissCounter count={kissCount} onKiss={handleKiss} />
          </div>
        )}

        {section === 'quiz' && (
          <div className="quiz-section fade-in">
            <h2 className="section-title">💋 Love Quiz about {MAIN_NAME} 💋</h2>
            <LoveQuiz onComplete={() => { triggerFireworks(); triggerConfetti(); triggerKissBurst(); showToast(`🏆💋 Quiz completed for ${MAIN_NAME}!`) }} />
          </div>
        )}

        {section === 'memories' && (
          <div className="memories-section fade-in">
            <MemoryWall />
          </div>
        )}

        {section === 'promises' && (
          <div className="promises-page fade-in">
            <LovePromises />
          </div>
        )}

        {section === 'reasons' && (
          <div className="reasons-page fade-in">
            <ReasonsILoveYou />
          </div>
        )}

        {section === 'poems' && (
          <div className="poems-page fade-in">
            <h2 className="section-title">📝💋 Poems for {MAIN_NAME} 💋📝</h2>
            <LovePoem />
          </div>
        )}

        {section === 'timeline' && (
          <div className="timeline-page fade-in">
            <h2 className="section-title">📅💋 Our Love Story with {MAIN_NAME} 💋📅</h2>
            <p className="section-subtitle">Every moment with {MAIN_NAME} is magical 💋✨</p>
            <LoveTimeline />
          </div>
        )}

        {section === 'calculator' && (
          <div className="calc-page fade-in">
            <LoveCalculator />
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-heart">💋</div>
        <p>Made with 💋😘 for Ennoda {MAIN_NAME}</p>
        <p>For my Kuttyma 🥰 Paapuu 😘 Chellamee 💋 Thangoo 👑</p>
        <p>Happy Valentine&#39;s Day 2025 💝💋</p>
        <p className="footer-tamil">இனிய காதலர் தினம், என் Chellamee! 🌹💋</p>
        <div className="footer-emojis">
          {['💋','😘','❤️‍🔥','💕','❤️','💖','💗','💘','💝','💞','💓','🌹','✨','💐','🫶','👄','🩷','💏','🥰','😍'].map((e, i) => (
            <span key={i} className="footer-emoji" style={{ animationDelay: (i * 0.1) + 's' }}>{e}</span>
          ))}
        </div>
        <p className="footer-credits">✨💋 Built with infinite love & kisses 💋✨</p>
      </footer>

      {/* FAB */}
      <button className="fab" onClick={handleHeartClick} aria-label="Send love">💋</button>

      {/* SCROLL TO TOP */}
      <button className={'scroll-top' + (showScrollTop ? ' visible' : '')}
        onClick={scrollToTop} aria-label="Scroll to top">
        ⬆️
      </button>
    </div>
  )
}

export default App
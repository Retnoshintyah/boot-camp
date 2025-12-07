// "use client";

// import { useEffect, useState, useRef, useMemo } from "react";

// export default function Details() {
//   const [advice, setAdvice] = useState(null);
//   const buttonRef = useRef(null);
//   const [loading, setLoading] = useState(true);

//   const fetchAdvice = () => {
//     setLoading(true);
//     fetch("https://api.adviceslip.com/advice")
//       .then(res => res.json())
//       .then(data => {
//         setAdvice(data.slip.advice);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchAdvice();
//   }, []);

//   const adviceLength = useMemo(() => {
//     return advice ? advice.length : 0;
//   }, [advice]);

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "#f4f6f8",
//         padding: 20,
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: 500,
//           background: "white",
//           padding: 32,
//           borderRadius: 16,
//           boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
//           textAlign: "center",
//         }}
//       >
//         <h1
//           style={{
//             marginBottom: 20,
//             fontSize: 28,
//             fontWeight: 700,
//             color: "#222",
//           }}
//         >
//           🌟 Today’s Advice
//         </h1>

//         {loading ? (
//           <p style={{ color: "#888", fontSize: 16 }}>Loading...</p>
//         ) : (
//           <p
//             style={{
//               fontSize: 18,
//               color: "#444",
//               lineHeight: 1.5,
//               marginBottom: 16,
//             }}
//           >
//             “{advice}”
//           </p>
//         )}

//         <p style={{ fontSize: 14, color: "#777", marginBottom: 24 }}>
//           Total characters: <strong>{adviceLength}</strong>
//         </p>

//         <button
//           ref={buttonRef}
//           onClick={fetchAdvice}
//           style={{
//             padding: "12px 24px",
//             background: "#2563eb",
//             color: "white",
//             border: "none",
//             borderRadius: 8,
//             fontSize: 16,
//             cursor: "pointer",
//             transition: "0.25s",
//           }}
//           onMouseEnter={() => (buttonRef.current.style.background = "#1d4ed8")}
//           onMouseLeave={() => (buttonRef.current.style.background = "#2563eb")}
//         >
//           Refresh Advice 🔄
//         </button>
//       </div>
//     </div>
//   );
// }

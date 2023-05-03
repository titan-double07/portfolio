import React,{useEffect} from 'react'
import { useGlobalContext } from './Context';


export default function HamBtn() {
  const {isOpen,close}=useGlobalContext()
 
  return (
    <div
      id="hidden-desktop"
      className={isOpen ? `ham-btn fade-in close` : `ham-btn fade-in`}
      onClick={close}
    >
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  );
}

// <style>
//   .ham-btn {
//   position: absolute;
//   z-index: 3;
//   right: 15px;
//   top: 15px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: .4em;
//   background-color: var(--blue);
//   width: 5rem;
//   height: 5rem;
//   padding:.5em;
//   border-radius: 50%;
//   cursor: pointer;
//   transition: all 1s ease-in-out;
// }
// .ham-btn .btn-line {
//   width: 80%;
//   height: 3px;
//   /* margin: 0 0 5px 0; */
//   background: #fff;
//   transition: all 0.5s ease-out;
// }
// .ham-btn.close {
//   transform: rotate(360deg);
// }
// .ham-btn.close .btn-line:nth-child(1) {
//   transform: rotate(45deg) translate(8px, 4px);
// }
// .ham-btn.close .btn-line:nth-child(2) {
//   opacity: 0;
// }
// .ham-btn.close .btn-line:nth-child(3) {
//   transform: rotate(-45deg) translate(8px, -5px);
// }
// </style>
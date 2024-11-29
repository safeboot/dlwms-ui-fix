// ==UserScript==
// @name        New script fit.ba
// @namespace   Violentmonkey Scripts
// @match       https://www.fit.ba/student/*
// @grant       none
// @version     1.0
// @author      -
// @description 11/27/2024, 7:27:48 PM
// ==/UserScript==
function addViewportMeta() {
    const item = document.createElement('meta');
    item.name = 'viewport';
    item.content = 'width=device-width, initial-scale=1';
  
    document.head.appendChild(item);
  }
  
  function fixFormHead() {
    if (!window.location.pathname.startsWith('/student/nastava/dokumenti')) {
      return;
    }
  
    const element = document.querySelectorAll('.form-head')[1];
  
    if (!element) {
      return;
    }
  
    element.classList.remove('form-head');
    element.classList.add('form-head-fixed');
  }
  
  function lol() {
    const random = Math.floor(Math.random() * 100000);
  
    if (random === 69420) {
      alert('Čestitamo! Molimo vas pokupite ispisnicu u studnetskoj.');
    }
  }
  
  addViewportMeta();
  fixFormHead();
  lol();
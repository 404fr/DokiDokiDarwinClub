/**
 * Doki Doki Darwin Club - Enhanced Main Application Engine
 */

class VisualNovelEngine {
  constructor() {
    this.story = window.GAME_STORY;
    this.poemWords = window.GAME_POEM_WORDS;
    this.sound = window.soundEngine;

    this.chapterIndex = 0;
    this.nodeIndex = 0;
    this.history = [];

    this.isTyping = false;
    this.typeTimer = null;
    this.fullText = "";
    this.autoPlay = false;
    this.autoTimer = null;
    this.skipMode = false;
    this.saveMode = "save"; // 'save' or 'load'

    this.poemCount = 0;
    this.poemScores = { darwin: 0, daniel: 0, rafiki: 0 };

    this.initDOM();
    this.bindEvents();
    this.updateSaveSlotUI();
  }

  initDOM() {
    this.titleScreen = document.getElementById("title-screen");
    this.gameViewport = document.getElementById("game-viewport");
    this.speakerTag = document.getElementById("speaker-tag");
    this.dialogueBox = document.getElementById("dialogue-box");
    this.dialogueText = document.getElementById("dialogue-text");

    this.spriteLeft = document.getElementById("sprite-left");
    this.spriteCenter = document.getElementById("sprite-center");
    this.spriteRight = document.getElementById("sprite-right");

    this.btnAuto = document.getElementById("btn-auto");
    this.btnSkip = document.getElementById("btn-skip");
    this.btnLog = document.getElementById("btn-log");
    this.btnSave = document.getElementById("btn-save");
    this.btnLoad = document.getElementById("btn-load");
    this.btnAudio = document.getElementById("btn-audio");

    this.modalLog = document.getElementById("modal-log");
    this.modalSave = document.getElementById("modal-save");
    this.modalPoem = document.getElementById("modal-poem");
    this.modalCredits = document.getElementById("modal-credits");
    this.logContent = document.getElementById("log-content");
  }

  bindEvents() {
    document.getElementById("btn-start").addEventListener("click", () => this.startNewGame());
    document.getElementById("btn-load-title").addEventListener("click", () => this.openSaveModal("load"));
    document.getElementById("btn-credits").addEventListener("click", () => this.modalCredits.classList.add("active"));
    document.getElementById("close-credits").addEventListener("click", () => this.modalCredits.classList.remove("active"));

    this.dialogueBox.addEventListener("click", () => this.onBoxClick());

    this.btnAuto.addEventListener("click", (e) => {
      e.stopPropagation();
      this.toggleAuto();
    });

    this.btnSkip.addEventListener("click", (e) => {
      e.stopPropagation();
      this.advance();
    });

    this.btnLog.addEventListener("click", (e) => {
      e.stopPropagation();
      this.renderLog();
      this.modalLog.classList.add("active");
    });
    document.getElementById("close-log").addEventListener("click", () => this.modalLog.classList.remove("active"));

    this.btnSave.addEventListener("click", (e) => {
      e.stopPropagation();
      this.openSaveModal("save");
    });
    this.btnLoad.addEventListener("click", (e) => {
      e.stopPropagation();
      this.openSaveModal("load");
    });
    document.getElementById("close-save").addEventListener("click", () => this.modalSave.classList.remove("active"));

    this.btnAudio.addEventListener("click", (e) => {
      e.stopPropagation();
      const isMuted = this.sound.toggleMute();
      this.btnAudio.innerText = `AUDIO: ${isMuted ? 'OFF' : 'ON'}`;
    });

    document.querySelectorAll(".save-slot").forEach(slot => {
      slot.addEventListener("click", (e) => {
        const slotNum = e.currentTarget.getAttribute("data-slot");
        if (this.saveMode === "save") {
          this.saveGame(slotNum);
        } else {
          this.loadGame(slotNum);
        }
      });
    });
  }

  startNewGame() {
    this.sound.playClick();
    this.titleScreen.style.opacity = "0";
    setTimeout(() => {
      this.titleScreen.style.display = "none";
    }, 500);

    this.chapterIndex = 0;
    this.nodeIndex = 0;
    this.history = [];
    this.loadNode();
  }

  loadNode() {
    const currentChapter = this.story.chapters[this.chapterIndex];
    if (!currentChapter) return;
    const node = currentChapter.nodes[this.nodeIndex];
    if (!node) {
      this.nextChapter();
      return;
    }

    if (node.triggerPoem) {
      this.startPoemMinigame();
      return;
    }

    // Set Background Image & Lighting Mode
    if (node.bg) {
      this.gameViewport.style.backgroundImage = `url('${node.bg}')`;
    } else {
      this.gameViewport.style.backgroundImage = 'none';
    }

    // Remove previous background mode classes
    this.gameViewport.className = "game-viewport";
    if (node.bgMode) {
      this.gameViewport.classList.add(`bg-mode-${node.bgMode}`);
    }

    // Sound and BGM
    if (node.bgm) {
      this.sound.playBGM(node.bgm);
    }
    if (node.sound === "punch") this.sound.playPunch();
    if (node.sound === "screech") this.sound.playAsphaltSlide();
    if (node.sound === "scare") this.sound.playGlitchScare();
    if (node.sound === "victory") this.sound.playVictory();

    // Glitch FX
    if (node.glitch) {
      this.gameViewport.classList.add("glitch-active");
      setTimeout(() => this.gameViewport.classList.remove("glitch-active"), 600);
    }
    if (node.screenShake) {
      this.gameViewport.classList.add("screen-shake");
      setTimeout(() => this.gameViewport.classList.remove("screen-shake"), 450);
    }

    // Character Sprites & Aura FX
    this.updateSprites(node);

    // Speaker Name
    this.speakerTag.innerText = node.speaker || "Narrator";

    // Text Typewriter Effect
    this.startTypewriter(node.text || "");

    // Save to History Log
    this.history.push({ speaker: node.speaker || "Narrator", text: node.text || "" });
  }

  updateSprites(node) {
    this.spriteLeft.innerHTML = "";
    this.spriteCenter.innerHTML = "";
    this.spriteRight.innerHTML = "";

    const renderChar = (charObj, container) => {
      if (!charObj || !charObj.img) return;
      const img = document.createElement("img");
      img.src = charObj.img;
      img.className = "sprite-img";
      if (charObj.bounce) img.classList.add("bounce-anim");
      if (charObj.shake) img.classList.add("shake-anim");
      if (charObj.aura) img.classList.add(charObj.aura);
      container.appendChild(img);
    };

    if (node.char) {
      if (node.char.pos === "left") renderChar(node.char, this.spriteLeft);
      else if (node.char.pos === "right") renderChar(node.char, this.spriteRight);
      else renderChar(node.char, this.spriteCenter);
    }

    if (node.charRight) {
      renderChar(node.charRight, this.spriteRight);
    }
  }

  startTypewriter(text) {
    if (this.typeTimer) clearInterval(this.typeTimer);
    this.isTyping = true;
    this.fullText = text;
    this.dialogueText.innerText = "";
    let i = 0;

    this.typeTimer = setInterval(() => {
      if (i < text.length) {
        this.dialogueText.innerText += text.charAt(i);
        if (i % 3 === 0) this.sound.playTextBlip();
        i++;
      } else {
        this.finishTypewriter();
      }
    }, 25);
  }

  finishTypewriter() {
    if (this.typeTimer) clearInterval(this.typeTimer);
    this.isTyping = false;
    this.dialogueText.innerText = this.fullText;

    if (this.autoPlay) {
      if (this.autoTimer) clearTimeout(this.autoTimer);
      this.autoTimer = setTimeout(() => this.advance(), 2000);
    }
  }

  onBoxClick() {
    this.sound.playClick();
    if (this.isTyping) {
      this.finishTypewriter();
    } else {
      this.advance();
    }
  }

  advance() {
    if (this.isTyping) {
      this.finishTypewriter();
      return;
    }
    const currentChapter = this.story.chapters[this.chapterIndex];
    if (this.nodeIndex + 1 < currentChapter.nodes.length) {
      this.nodeIndex++;
      this.loadNode();
    } else {
      this.nextChapter();
    }
  }

  nextChapter() {
    if (this.chapterIndex + 1 < this.story.chapters.length) {
      this.chapterIndex++;
      this.nodeIndex = 0;
      this.loadNode();
    }
  }

  toggleAuto() {
    this.autoPlay = !this.autoPlay;
    this.btnAuto.innerText = `AUTO: ${this.autoPlay ? 'ON' : 'OFF'}`;
    if (this.autoPlay && !this.isTyping) {
      this.advance();
    }
  }

  renderLog() {
    this.logContent.innerHTML = "";
    this.history.forEach(item => {
      const div = document.createElement("div");
      div.className = "log-entry";
      div.innerHTML = `<div class="log-speaker">${item.speaker}</div><div>${item.text}</div>`;
      this.logContent.appendChild(div);
    });
    this.logContent.scrollTop = this.logContent.scrollHeight;
  }

  openSaveModal(mode) {
    this.saveMode = mode;
    document.getElementById("modal-save-title").innerText = mode === "save" ? "Save Game" : "Load Game";
    this.updateSaveSlotUI();
    this.modalSave.classList.add("active");
  }

  saveGame(slotNum) {
    const saveData = {
      chapterIndex: this.chapterIndex,
      nodeIndex: this.nodeIndex,
      date: new Date().toLocaleString(),
      speaker: this.speakerTag.innerText,
      textPreview: this.fullText.substring(0, 40) + "..."
    };
    localStorage.setItem(`dddc_save_slot_${slotNum}`, JSON.stringify(saveData));
    this.updateSaveSlotUI();
    this.sound.playVictory();
    this.modalSave.classList.remove("active");
  }

  loadGame(slotNum) {
    const dataStr = localStorage.getItem(`dddc_save_slot_${slotNum}`);
    if (!dataStr) return;
    const saveData = JSON.parse(dataStr);
    this.chapterIndex = saveData.chapterIndex;
    this.nodeIndex = saveData.nodeIndex;

    this.titleScreen.style.display = "none";
    this.modalSave.classList.remove("active");
    this.sound.playClick();
    this.loadNode();
  }

  updateSaveSlotUI() {
    for (let i = 1; i <= 4; i++) {
      const slotEl = document.getElementById(`slot-info-${i}`);
      const dataStr = localStorage.getItem(`dddc_save_slot_${i}`);
      if (dataStr) {
        const data = JSON.parse(dataStr);
        slotEl.innerHTML = `<strong>Ch.${data.chapterIndex + 1} Node ${data.nodeIndex + 1}</strong><br><small>${data.date}</small><br><em>${data.textPreview}</em>`;
      } else {
        slotEl.innerText = "Empty Slot";
      }
    }
  }

  /* Poem Minigame Logic */
  startPoemMinigame() {
    this.poemCount = 0;
    this.poemScores = { darwin: 0, daniel: 0, rafiki: 0 };
    document.getElementById("poem-count").innerText = "0 / 5 Words";
    this.renderPoemWords();
    this.modalPoem.classList.add("active");
  }

  renderPoemWords() {
    const container = document.getElementById("poem-words");
    container.innerHTML = "";

    // Pick 6 random words from list
    const shuffled = [...this.poemWords].sort(() => 0.5 - Math.random()).slice(0, 6);
    shuffled.forEach(item => {
      const btn = document.createElement("div");
      btn.className = "word-stamp";
      btn.innerText = item.word;
      btn.addEventListener("click", () => {
        this.sound.playClick();
        this.poemScores.darwin += item.points.darwin;
        this.poemScores.daniel += item.points.daniel;
        this.poemScores.rafiki += item.points.rafiki;
        this.poemCount++;
        document.getElementById("poem-count").innerText = `${this.poemCount} / 5 Words`;

        if (this.poemCount >= 5) {
          this.modalPoem.classList.remove("active");
          this.sound.playVictory();
          this.nextChapter();
        } else {
          this.renderPoemWords();
        }
      });
      container.appendChild(btn);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.gameEngine = new VisualNovelEngine();
});

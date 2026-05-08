(function () {
  const PASSWORD = "123";
  const AUTH_KEY = "devotary-study-auth";

  function getPageKey() {
    return document.body.dataset.page || "study";
  }

  function storageKey(suffix) {
    return "devotary:" + getPageKey() + ":" + suffix;
  }

  function readJson(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function setupLock() {
    const lock = document.querySelector("[data-lock]");
    if (!lock) {
      return;
    }

    const authed = localStorage.getItem(AUTH_KEY) === "true";
    const form = lock.querySelector("form");
    const input = lock.querySelector("input");
    const error = lock.querySelector("[data-lock-error]");
    const logoutButtons = document.querySelectorAll("[data-logout]");

    if (authed) {
      lock.dataset.visible = "false";
    } else {
      lock.dataset.visible = "true";
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (input.value === PASSWORD) {
        localStorage.setItem(AUTH_KEY, "true");
        lock.dataset.visible = "false";
        error.textContent = "";
        input.value = "";
      } else {
        error.textContent = "Wrong password.";
      }
    });

    logoutButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        localStorage.removeItem(AUTH_KEY);
        lock.dataset.visible = "true";
      });
    });
  }

  function setupOpenCards() {
    const openState = readJson(storageKey("open-cards"), {});
    document.querySelectorAll("[data-study-card]").forEach(function (card) {
      const id = card.dataset.studyCard;
      const button = card.querySelector("[data-toggle-card]");
      const toggle = card.querySelector(".toggle");

      if (Object.prototype.hasOwnProperty.call(openState, id)) {
        card.dataset.open = openState[id] ? "true" : "false";
      }

      toggle.textContent = card.dataset.open === "true" ? "−" : "+";

      button.addEventListener("click", function () {
        const next = card.dataset.open !== "true";
        card.dataset.open = next ? "true" : "false";
        toggle.textContent = next ? "−" : "+";
        openState[id] = next;
        writeJson(storageKey("open-cards"), openState);
      });
    });
  }

  function setupTasks() {
    const state = readJson(storageKey("tasks"), {});
    const boxes = Array.from(document.querySelectorAll("[data-task-box]"));

    boxes.forEach(function (box) {
      const id = box.dataset.taskBox;
      box.checked = Boolean(state[id]);
      box.addEventListener("change", function () {
        state[id] = box.checked;
        writeJson(storageKey("tasks"), state);
        updateProgress();
      });
    });

    function updateProgress() {
      const total = boxes.length;
      const done = boxes.filter(function (item) {
        return item.checked;
      }).length;
      const percent = total ? Math.round((done / total) * 100) : 0;

      document.querySelectorAll("[data-progress-total]").forEach(function (node) {
        node.textContent = String(total);
      });
      document.querySelectorAll("[data-progress-done]").forEach(function (node) {
        node.textContent = String(done);
      });
      document.querySelectorAll("[data-progress-percent]").forEach(function (node) {
        node.textContent = percent + "%";
      });
      document.querySelectorAll("[data-progress-bar]").forEach(function (node) {
        node.style.width = percent + "%";
      });
    }

    updateProgress();
  }

  function taskMarkup(pagePrefix, sectionId, tasks) {
    return tasks.map(function (task, index) {
      const id = pagePrefix + "-" + sectionId + "-" + index;
      return (
        '<label class="task">' +
          '<input type="checkbox" data-task-box="' + id + '">' +
          '<span class="task-body">' +
            '<strong>' + task.title + '</strong>' +
            '<span>' + task.detail + '</span>' +
          '</span>' +
        '</label>'
      );
    }).join("");
  }

  function resourceMarkup(resources) {
    return resources.map(function (resource) {
      return (
        '<li><a href="' + resource.url + '" target="_blank" rel="noreferrer">' + resource.label + '</a></li>'
      );
    }).join("");
  }

  function renderClep() {
    const mount = document.querySelector("[data-clep-list]");
    if (!mount || !window.studyData) {
      return;
    }

    mount.innerHTML = window.studyData.clep.map(function (item) {
      return (
        '<article class="study-card" data-study-card="' + item.id + '" data-open="' + (item.priority === "Priority 1" ? "true" : "false") + '">' +
          '<button class="study-head" type="button" data-toggle-card>' +
            '<div class="study-title">' +
              '<span class="eyebrow">' + item.priority + '</span>' +
              '<h2>' + item.title + '</h2>' +
              '<span class="study-subtitle">' + item.credit + " • Suggested study block: " + item.duration + '</span>' +
            '</div>' +
            '<span class="toggle">+</span>' +
          '</button>' +
          '<div class="study-body">' +
            '<div class="two-col">' +
              '<div>' +
                '<div class="callout"><strong>Why It Fits</strong><p>' + item.fit + '</p></div>' +
                '<div class="callout section"><strong>Study Note</strong><p>' + item.note + '</p></div>' +
                '<div class="section">' +
                  '<div class="small-title">Checklist</div>' +
                  '<div class="checklist">' + taskMarkup("clep", item.id, item.tasks) + '</div>' +
                '</div>' +
              '</div>' +
              '<div>' +
                '<div class="small-title">Sources And Materials</div>' +
                '<ul class="resource-list">' + resourceMarkup(item.resources) + '</ul>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  function renderSift() {
    const mount = document.querySelector("[data-sift-list]");
    const resourceMount = document.querySelector("[data-sift-resources]");
    const notesMount = document.querySelector("[data-sift-notes]");
    if (!window.studyData || !window.studyData.sift) {
      return;
    }

    if (resourceMount) {
      resourceMount.innerHTML = resourceMarkup(window.studyData.sift.resources);
    }

    if (notesMount) {
      notesMount.innerHTML = window.studyData.sift.notes.map(function (note) {
        return "<li>" + note + "</li>";
      }).join("");
    }

    if (!mount) {
      return;
    }

    mount.innerHTML = window.studyData.sift.weeks.map(function (week, index) {
      return (
        '<article class="study-card" data-study-card="' + week.id + '" data-open="' + (index === 0 ? "true" : "false") + '">' +
          '<button class="study-head" type="button" data-toggle-card>' +
            '<div class="study-title">' +
              '<span class="eyebrow">' + week.title + '</span>' +
              '<h2>' + week.focus + '</h2>' +
              '<span class="study-subtitle">6 core tasks</span>' +
            '</div>' +
            '<span class="toggle">+</span>' +
          '</button>' +
          '<div class="study-body">' +
            '<div class="checklist">' + taskMarkup("sift", week.id, week.tasks) + '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  function setupHubSummary() {
    const hub = document.querySelector("[data-hub-summary]");
    if (!hub || !window.studyData) {
      return;
    }

    const clepTasks = window.studyData.clep.reduce(function (sum, item) {
      return sum + item.tasks.length;
    }, 0);
    const siftTasks = window.studyData.sift.weeks.reduce(function (sum, week) {
      return sum + week.tasks.length;
    }, 0);

    hub.innerHTML =
      '<article class="summary-card">' +
        '<span class="eyebrow">CLEP Track</span>' +
        '<h2>NMSU Grants A.S. CLEPs</h2>' +
        '<p>Prioritized for degree fit first, not maximum exam count.</p>' +
        '<div class="summary-meta">' +
          '<span class="pill">' + window.studyData.clep.length + ' exam groups</span>' +
          '<span class="pill">' + clepTasks + ' checklist items</span>' +
          '<span class="pill">Official NMSU-backed priorities</span>' +
        '</div>' +
        '<div class="hero-actions"><a class="button" href="/study/clep.html">Open CLEP Tracker</a></div>' +
      '</article>' +
      '<article class="summary-card">' +
        '<span class="eyebrow">SIFT Track</span>' +
        '<h2>Army SIFT Prep</h2>' +
        '<p>FAA-first aviation review with math and mechanical emphasis.</p>' +
        '<div class="summary-meta">' +
          '<span class="pill">4 weeks</span>' +
          '<span class="pill">' + siftTasks + ' checklist items</span>' +
          '<span class="pill">FAA helicopter handbook core</span>' +
        '</div>' +
        '<div class="hero-actions"><a class="button" href="/study/sift.html">Open SIFT Tracker</a></div>' +
      '</article>';
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupLock();
    renderClep();
    renderSift();
    setupHubSummary();
    setupOpenCards();
    setupTasks();
  });
})();

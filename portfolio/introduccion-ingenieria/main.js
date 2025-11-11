document.addEventListener('DOMContentLoaded', () => {

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  function wrapLabel(label, maxLen) {
    if (label.length <= maxLen) {
      return label;
    }
    const parts = [];
    let currentPart = '';
    label.split(' ').forEach(word => {
      if (currentPart.length + word.length + 1 <= maxLen) {
        currentPart += (currentPart.length === 0 ? '' : ' ') + word;
      } else {
        parts.push(currentPart);
        currentPart = word;
      }
    });
    parts.push(currentPart);
    return parts;
  }

  try {
    const ctx1 = document.getElementById('eWasteChart').getContext('2d');
    new Chart(ctx1, {
      type: 'doughnut',
      data: {
        labels: ['Reciclado Formal y Seguro', 'Sin Gestionar (Vertedero, Informal)'],
        datasets: [{
          data: [17.4, 82.6],
          backgroundColor: [
            '#16a34a',
            '#d1d5db'
          ],
          borderColor: [
            '#ffffff',
            '#ffffff'
          ],
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              boxWidth: 20,
              padding: 20,
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed !== null) {
                  label += context.parsed + '%';
                }
                return label;
              }
            }
          }
        }
      }
    });
  } catch (e) {
    console.error("Error creating eWasteChart:", e);
  }

  try {
    const ctx2 = document.getElementById('kpiChart').getContext('2d');
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Kg Recolectados', 'Kg Reutilizados (Reparados)', 'Alumnos/Padres Impactados'],
        datasets: [{
          label: 'Resultados del Piloto (Simulación)',
          data: [520, 130, 450],
          backgroundColor: [
            '#16a34a',
            '#22c55e',
            '#86efac'
          ],
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          },
          x: {
            ticks: {
              callback: function (value) {
                const label = this.getLabelForValue(value);
                return wrapLabel(label, 15);
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  } catch (e) {
    console.error("Error creating kpiChart:", e);
  }

  const solutionTabs = document.getElementById('solution-tabs');
  const solutionBtns = document.querySelectorAll('.solution-btn');
  const solutionPanels = document.querySelectorAll('.solution-panel');
  const defaultPanel = document.getElementById('sol-default');

  solutionTabs.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    const targetPanelId = e.target.dataset.target;

    solutionBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    solutionPanels.forEach(panel => {
      panel.classList.add('hidden');
      panel.style.opacity = 0;
    });

    const targetPanel = document.getElementById(targetPanelId);
    if (targetPanel) {
      targetPanel.classList.remove('hidden');
      setTimeout(() => {
        targetPanel.style.opacity = 1;
      }, 50);
    }
  });

  function showDefaultSolution() {
    solutionBtns[0].classList.add('active');
    solutionPanels.forEach(panel => {
      panel.classList.add('hidden');
      panel.style.opacity = 0;
    });
    const defaultActivePanel = document.getElementById(solutionBtns[0].dataset.target);
    if (defaultActivePanel) {
      defaultActivePanel.classList.remove('hidden');
      defaultActivePanel.style.opacity = 1;
    } else if (defaultPanel) {
      defaultPanel.classList.remove('hidden');
      defaultPanel.style.opacity = 1;
    }
  }
  showDefaultSolution();

  const navLinks = document.querySelectorAll('.nav-link');
  const navLinksMobile = document.querySelectorAll('.nav-link-mobile');
  const sections = document.querySelectorAll('section');

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (mobileMenu.classList.contains('hidden') === false) {
      mobileMenu.classList.add('hidden');
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
  navLinksMobile.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.4
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active-nav', link.dataset.target === id);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
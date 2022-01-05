const timer = (id, deadline) => {
  const getTimerRemaining = (endtime) => {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return { total: t, seconds, minutes, hours, days };
  };

  const addZero = (num) => (num <= 9 ? '0' + num : num);

  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const seconds = timer.querySelector('#seconds');
    const minutes = timer.querySelector('#minutes');
    const hours = timer.querySelector('#hours');

    const timeInterval = setInterval(updateClock, 500);

    updateClock();

    function updateClock() {
      const t = getTimerRemaining(endtime);

      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        days.textContent = '00';
        hours.textContent = '00';
        minutes.textContent = '00';
        seconds.textContent = '00';

        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, deadline);
};

export default timer;

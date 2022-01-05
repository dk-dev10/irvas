import checkNumInputs from './chackNumInputs';

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  const firstModal = document.querySelector('.popup_calc_button');
  const middleModal = document.querySelector('.popup_calc_profile_button');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElems(event, elem, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;

          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              state[prop] = i === 0 ? 'Холодное' : 'Теплое';
              elem.forEach((box, j) => {
                box.checked = false;
                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }
            break;

          case 'SELECT':
            state[prop] = item.value;
            break;
        }

        if (
          state.form == undefined ||
          state.height == undefined ||
          state.width == undefined
        ) {
          firstModal.disabled = true;
        } else {
          firstModal.disabled = false;
        }

        if (state.type == undefined || state.profile == undefined) {
          middleModal.disabled = true;
        } else {
          middleModal.disabled = false;
        }
      });
      if (!!state) {
        firstModal.disabled = true;
      }
    });
  }

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;

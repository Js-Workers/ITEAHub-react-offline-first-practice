import {showLoader, hideLoader} from './loader';

export {
  addItem,
  getItem,
  changeItem,
  deleteItem
};

export const ADD = 'ADD';
export const GET = 'GET';
export const CHANGE = 'CHANGE';
export const DELETE = 'DELETE';

function addItem(item) {
  return dispath => {
    dispath(showLoader());

    return fetch(`http://localhost/items/`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(item)
    })
    .then(item => item.json())
    .then(item => {
      dispath(hideLoader());

      return dispath({
        type: ADD,
        payload: {
          item
        }
      });
    })
    .catch(err => {
      console.error('err', err);

      dispath(hideLoader());
    });
  }
}

function getItem(id) {
  return {
    type: GET,
    payload: {
      id
    }
  };
}

function changeItem(item) {
  return {
    type: CHANGE,
    payload: {
      item
    }
  };
}

function deleteItem(id) {
  console.error('deleteItem', id);

  return dispath => {
    dispath(showLoader());

    return fetch(`http://localhost/items/${id}`, {method: 'DELETE'})
      .then(() => {
        dispath(hideLoader());

        return dispath({
          type: DELETE,
          payload: {
            id
          }
        });
      })
      .catch(err => {
        console.error('err', err);

        dispath(hideLoader());
      });
  }

}

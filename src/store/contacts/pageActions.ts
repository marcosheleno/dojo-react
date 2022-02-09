
export const UPDATE_PAGE = 'page/UPDATE_PAGE';

const updatePage = (id: number) => {
  return {
    type: UPDATE_PAGE,
    payload: id,
  };
};


export { updatePage };
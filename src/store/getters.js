const getters = {
  clickedIndex: state => state.form.clickedIndex,
  formAttribute: state => state.form.formAttribute,
  formItems: state => state.form.formItems,
  formItemToHandle: state => state.form.formItemToHandle,
  formItem: state => state.form.formItem,
  formItemAttribute: state => state.form.formItemAttribute,

  srcFormCode: state => state.form.srcCode,
  srcTableCode: state => state.table.srcCode,
};
export default getters;

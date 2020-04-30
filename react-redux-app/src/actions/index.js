export function addItem(item) {
  console.log('addItem action item', item)
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}
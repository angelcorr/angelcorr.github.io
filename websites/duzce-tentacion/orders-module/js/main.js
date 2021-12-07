const DB_NAME = 'orderList';
//delete-row, update-row, d-none, confirm-row
class Order {
  constructor(formName, formFields) {
    this.formName = formName;
    this.jsonFields = formFields;
  }

  getOrderDetails() {
    return {
      portions: document[this.formName][this.jsonFields.portions].value,
      pastries: document[this.formName][this.jsonFields.pastries].value,
      glaze: document[this.formName][this.jsonFields.glaze].value,
      decoration: document[this.formName][this.jsonFields.decoration].value,
      orderDate: document[this.formName][this.jsonFields.orderDate].value,
    }
  }

  cleanValues() {
    return {
      portions: document[this.formName][this.jsonFields.portions].value = '',
      pastries: document[this.formName][this.jsonFields.pastries].value = '',
      glaze: document[this.formName][this.jsonFields.glaze].value = '',
      decoration: document[this.formName][this.jsonFields.decoration].value = '',
      orderDate: document[this.formName][this.jsonFields.orderDate].value = '',
    }
  }

  create() {
    const newProduct = this.getOrderDetails();
    const currentData = this.read();
    const finalData = [...currentData, newProduct];
    localStorage.setItem(DB_NAME, JSON.stringify(finalData));

    this.refreshData();
    this.cleanValues();
  }

  read() {
    return JSON.parse(localStorage.getItem(DB_NAME) || '[]');
  }

  refreshData() {
    const orders = this.read();
    const renderOrders = orders.map((order, i) => `
      <tr id="display-row-${i}">
      <td>${i + 1}</td>
        <td>${order.portions}</td>
        <td>${order.pastries}</td>
        <td>${order.glaze}</td>
        <td>${order.decoration}</td>
        <td>${order.orderDate}</td>
        <td class="colActions">          
          <button type="button" data-order-index="${i}" name="btn-edit" class="btn btn-sm custom-btn update-row">
            <i data-order-index="${i}" class="fa fa-edit text-ligth update-row" aria-hidden="true"></i>
          </button>
          <button type="button" data-order-index="${i}" class="btn btn-sm custom-btn delete-row">
            <i data-order-index="${i}" class="fa fa-trash text-ligth delete-row" name="fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
      <tr id="update-row-${i}" class="d-none">
        <td>Editing</td>
        <td>
          <label for="portions">Porciones</label>
          <select class="select" name="portions" id="portions" required>
            <option value="" class="d-none"></option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="70">70</option>
          </select>
        </td>
        <td>
          <label for="pastries">Masas</label>
          <select class="select" name="pastries" id="pastries" required>
            <option value="" class="d-none"></option>
            <option value="Banano">Banano</option>
            <option value="Vainilla">Vainilla</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Red Velvet">Red Velvet</option>
            <option value="Frutos Rojos">Frutos Rojos</option>
          </select>
        </td>
        <td>
          <label for="glaze">Glaceado</label>
          <select class="select" name="glaze" id="glaze" required>
            <option value="" class="d-none"></option>
            <option value="Nutella">Nutella</option>
            <option value="Ganache">Ganache</option>
            <option value="Vainilla">Vainilla</option>
            <option value="Arequipe">Arequipe</option>
            <option value="Frutos Rojos">Frutos Rojos</option>
          </select>
        </td>
        <td>
          <label for="decoration">Decoración</label>
          <select class="select" name="decoration" id="decoration" required>
            <option value="" class="d-none"></option>
            <option value="Fondat">Fondant</option>
            <option value="Chocolate modelar">Chocolate para modelar</option>
            <option value="Ganache Chocolate Negro">Chocolate Negro</option>
            <option value="Ganache Chocolate Blanco">Chocolate Blanco</option>
            <option value="Ganache Chocolate Leche">Chocolate Leche</option>
          </select>
        </td>
        <td>
          <label for="orderDate">Fecha de compra</label>
          <input type="date" id="orderDate" name="orderDate" required>
        </td>
        <td>
          <button data-order-index="${i}" type="button" class="btn custom-btn confirm-row">Confirmar</button>
          <button data-order-index="${i}" type="button" class="btn custom-btn cancel-row">Cancelar</button>
        </td>
      </tr>
    `
    ).join(' ');

    document.getElementById('tableBody').innerHTML = renderOrders;
  }

  update(orderIndex) {
    const updateRow = document.getElementById(`update-row-${orderIndex}`);

    const updatedOrder = {
      portions: updateRow.querySelector(`#${this.jsonFields.portions}`).value,
      pastries: updateRow.querySelector(`#${this.jsonFields.pastries}`).value,
      glaze: updateRow.querySelector(`#${this.jsonFields.glaze}`).value,
      decoration: updateRow.querySelector(`#${this.jsonFields.decoration}`).value,
      orderDate: updateRow.querySelector(`#${this.jsonFields.orderDate}`).value,
    };
    
    const orders = this.read();
    orders.splice(orderIndex, 1, updatedOrder);

    localStorage.setItem(DB_NAME, JSON.stringify(orders));
    this.refreshData();
  }

  delete(orderIndex) {
    const orders = this.read();
    orders.splice(orderIndex, 1);

    localStorage.setItem(DB_NAME, JSON.stringify(orders));
    this.refreshData();
  }

  handleDelete(event) {
    if (!event.target.classList.contains('delete-row')) return;

    this.delete(Number(event.target.dataset.orderIndex));
  }

  toggleUpdate(orderIndex) {
    const displayRow = document.getElementById(`display-row-${orderIndex}`);
    const updateRow = document.getElementById(`update-row-${orderIndex}`);

    displayRow.classList.toggle('d-none');
    updateRow.classList.toggle('d-none');
  }

  handleUpdate(event) {
    if (!event.target.classList.contains('update-row')) return;

    const orderIndex = Number(event.target.dataset.orderIndex);
    this.toggleUpdate(orderIndex);
  }

  handleConfirm(event) {
    if (!event.target.classList.contains('confirm-row')) return;

    const orderIndex = Number(event.target.dataset.orderIndex);
    this.toggleUpdate(orderIndex);
    this.update(orderIndex);
  }

  handleCancel(event) {
    if (!event.target.classList.contains('cancel-row')) return;

    const orderIndex = Number(event.target.dataset.orderIndex);
    this.toggleUpdate(orderIndex);
  }
}

const formName = 'cakeOrders';
const formFields = {
  portions: 'portions',
  pastries: 'pastries',
  glaze: 'glaze',
  decoration: 'decoration',
  orderDate: 'orderDate',
};

const orderManager = new Order(formName, formFields);
orderManager.refreshData();

document.getElementById('create-order').addEventListener('click', () => orderManager.create());

document.tableMain.addEventListener('click', (event) => orderManager.handleDelete(event));
document.tableMain.addEventListener('click', (event) => orderManager.handleUpdate(event));
document.tableMain.addEventListener('click', (event) => orderManager.handleConfirm(event));
document.tableMain.addEventListener('click', (event) => orderManager.handleCancel(event));

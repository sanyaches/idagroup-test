import { getProducts } from "@/assets/request"

const actions = {
  loadProducts({ commit }): any {
    return new Promise((resolve, reject) => {
      getProducts().then((products) => {
        commit('setProducts', products);
        return resolve()
      })
      .catch((err) => {
        return reject(err)
      });
    })
  }
};

export default actions

import Item from '../../components/Item';

/**
 * ItemList
 *
 * CORRECCIÓN: Se reemplaza `key={`item-${i}`}` (índice de array) por
 * `key={item.id}`. Usar el índice como key provoca re-renders incorrectos
 * cuando la lista se filtra o reordena, ya que React no puede identificar
 * qué elemento cambió realmente.
 */
const ItemList = ({ items }) => {
    return (
        <section className="items__container container">
            {items.map((item) => (
                <Item key={item.id} {...item} tag="NUEVO" />
            ))}
        </section>
    );
};

export default ItemList;

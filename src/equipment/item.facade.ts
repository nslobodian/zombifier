import { ItemDocument } from '../item/schema/item.schema';
import { Equipment } from './schema/equipment.schema';

export class EquipmentFacade {
  constructor(private equipment: Equipment, private items: ItemDocument[]) {}

  private item(): ItemDocument {
    return this.items.find((i) => i._id.equals(this.equipment.item));
  }

  plainEquipment() {
    return {
      id: this.equipment._id.toHexString(),
      name: this.item().name,
      qty: this.equipment.qty,
      totalPrice: this.item().price * this.equipment.qty,
    };
  }
}

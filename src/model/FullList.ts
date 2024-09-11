import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(ItemObj: ListItem): void;
  deleteItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();
  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;
    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);

    parsedList.forEach((ItemObj) => {
      const newListItem = new ListItem(
        ItemObj._id,
        ItemObj._item,
        ItemObj._checked
      );
      FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(ItemObj: ListItem): void {
    this._list.push(ItemObj);
    this.save();
  }

  deleteItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}

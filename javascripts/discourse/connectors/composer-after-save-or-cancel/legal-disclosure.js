import Component from "@glimmer/component";

export default class BeforeDisclosure extends Component {
  get showDisclosure() {
    console.log("CATEGORY IDS: ", settings.category_ids);
    let category_ids = settings.category_ids.split("|").map(parseInt);
    return category_ids.includes(this.args.outletArgs.model.category?.id);
  }
}

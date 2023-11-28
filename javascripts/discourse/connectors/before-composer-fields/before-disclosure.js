import Component from "@glimmer/component";
// import { tracked } from '@glimmer/tracking'

export default class BeforeDisclosure extends Component {

  get showDisclosure() {
    return this.args.outletArgs.model.category?.id === settings.category_id;
  }
}

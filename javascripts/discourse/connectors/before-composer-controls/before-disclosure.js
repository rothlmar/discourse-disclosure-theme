import Component from "@glimmer/component";
// import { tracked } from '@glimmer/tracking'

export default class BeforeDisclosure extends Component {
  // static shouldRender(outletArgs, helper) {
    // console.log(outletArgs.model.tags);
    // return outletArgs.model.tags.length > 0;
  // }
  
  get tagsAndCategory() {
    // return "TAGS: " + settings.valid_tags;
    return "---" + this.args.outletArgs.model.tags + " " + this.args.outletArgs.model.category.id;
  }

  get goodCategory() {
    return this.args.outletArgs.model.category.id == 16;
  }
}

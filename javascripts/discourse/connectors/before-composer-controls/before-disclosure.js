import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking'

export default class BeforeDisclosure extends Component {
  @tracked category = this.args.category;
  @tracked tags = this.args.tag;
  
  get processableTags() {
    return "TAGS: " + settings.valid_tags;
  }

  static shouldRender(outletArgs, helper) {
    console.log("Category: ", this.category);
    console.lgo("Tags: ", this.tags);
    console.log(outletArgs.model.tags);
    return outletArgs.model.tags.length > 0;
  }
}

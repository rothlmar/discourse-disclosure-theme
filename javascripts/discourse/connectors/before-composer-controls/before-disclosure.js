import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking'

export default class BeforeDisclosure extends Component {
  
  get processableTags() {
    return "TAGS: " + settings.valid_tags;
  }

  static shouldRender(outletArgs, helper) {
    console.log(outletArgs.model.tags);
    return outletArgs.model.tags.length > 0;
  }
}

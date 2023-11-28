import Component from "@glimmer/component";
// import { tracked } from '@glimmer/tracking'

export default class BeforeDisclosure extends Component {
  // static shouldRender(outletArgs, helper) {
    // console.log(outletArgs.model.tags);
    // return outletArgs.model.tags.length > 0;
  // }
  
  get processableTags() {
    return "TAGS: " + settings.valid_tags;
  }
}

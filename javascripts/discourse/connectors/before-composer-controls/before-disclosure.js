import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class BeforeDisclosure extends Component {
  @service siteSettings;

  get processableTags() {
    return "TAGS: " + settings.valid_tags    
  }
}

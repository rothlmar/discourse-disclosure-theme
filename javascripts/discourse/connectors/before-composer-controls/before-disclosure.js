import Component from "@glimmer/component";

export default class BeforeDisclosure extends Component {
  get processableTags() {
    return "TAGS: " + settings.valid_tags;
  }
}

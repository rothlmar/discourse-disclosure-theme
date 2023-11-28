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

  get showDisclosure() {
    console.log(this.args.outletArgs.model);
    let category_match = this.args.outletArgs.model.category?.id === settings.category_id;

    // let allowed_tags = settings.valid_tags.split("|");
    // console.log(allowed_tags, this.args.outletArgs.model.tags);
    // let tag_match = false;
    // for (const assigned_tag in this.args.outletArgs.model.tags) {
    //   if (allowed_tags.includes(assigned_tag)) {
    //     tag_match = true;
    //     break;
    //   }
    // }
    return category_match;
  }
}

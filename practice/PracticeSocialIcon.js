import {View, ScrollView} from "react-native";
import {SocialIcon, SocialIconProps} from "@rneui/themed";

export default function PracticeSocialIcon() {
  const dataList = [
    {
      type: "facebook",
    },
    {
      type: "twitter",
    },
    {
      type: "google-plus-official",
    },
    {
      type: "google",
    },
    {
      type: "pinterest",
    },
    {
      type: "linkedin",
    },
    {
      type: "youtube",
    },
    {
      type: "vimeo",
    },
    {
      type: "tumblr",
    },
    {
      type: "instagram",
    },
    {
      type: "quora",
    },
    {
      type: "flickr",
    },
    {
      type: "foursquare",
    },
    {
      type: "wordpress",
    },
    {
      type: "stumbleupon",
    },
    {
      type: "github",
    },
    {
      type: "github-alt",
    },
    {
      type: "twitch",
    },
    {
      type: "medium",
    },
    {
      type: "soundcloud",
    },
    {
      type: "stack-overflow",
    },
    {
      type: "gitlab",
    },
    {
      type: "angellist",
    },
    {
      type: "codepen",
    },
    {
      type: "weibo",
    },
    {
      type: "vk",
    },
    {
      type: "facebook-messenger",
      iconType: "material-community",
    },
    {
      type: "whatsapp",
    },
  ];

  return (
    <View>
      <Text>Practice Social Icon</Text>
      <SocialIcon type="codepen" iconType="font-awesome" />
    </View>
  );
}

import React from "react";
import PropTypes from "prop-types";
import { ScrollView, ActivityIndicator } from "react-native";

const ScrollWrap = ({ loading, children, contentContainerStyle }) => (
  <ScrollView
    style={{ backgroundColor: "#44a67b" }}
    contentContainerStyle={{
      flex: loading ? 1 : 0,
      justifyContent: loading ? "center" : "flex-start",
      ...contentContainerStyle,
    }}
  >
    {loading ? <ActivityIndicator color="#fff" size="large" /> : children}
  </ScrollView>
);

ScrollWrap.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  contentContainerStyle: PropTypes.object,
};

export default ScrollWrap;

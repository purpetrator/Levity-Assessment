import React from "react";
import TestRenderer from "react-test-renderer";
import {MockedProvider} from "@apollo/client/testing";
import {App, GITHUB_REPOS} from "../App";

const mockApiCall = [
  {
    request: {
      query: GITHUB_REPOS,
      variables: {
        queryString: "user:shopify sort:stars",
      },
    },
    result: {
      data: {
        search: {
          repositoryCount: 369,
          nodes: [
            {
              nameWithOwner: "Shopify/draggable",
              createdAt: "2017-09-27T15:31:23Z",
              description:
                "The JavaScript Drag & Drop library your grandparents warned you about.",
              stargazerCount: 15811,
              forkCount: 1013,
              name: "draggable",
              homepageUrl: "https://shopify.github.io/draggable",
              owner: {
                url: "https://github.com/Shopify",
                login: "Shopify",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/8085?s=20&v=4",
                __typename: "Organization",
              },
              url: "https://github.com/Shopify/draggable",
              __typename: "Repository",
            },
            {
              nameWithOwner: "Shopify/dashing",
              createdAt: "2012-07-18T21:01:40Z",
              description:
                "The exceptionally handsome dashboard framework in Ruby and Coffeescript.",
              stargazerCount: 11076,
              forkCount: 1230,
              name: "dashing",
              homepageUrl: "http://shopify.github.com/dashing/",
              owner: {
                url: "https://github.com/Shopify",
                login: "Shopify",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/8085?s=20&v=4",
                __typename: "Organization",
              },
              url: "https://github.com/Shopify/dashing",
              __typename: "Repository",
            },
            {
              nameWithOwner: "Shopify/liquid",
              createdAt: "2008-05-08T15:27:26Z",
              description:
                "Liquid markup language. Safe, customer facing template language for flexible web apps. ",
              stargazerCount: 9330,
              forkCount: 1226,
              name: "liquid",
              homepageUrl: "https://shopify.github.io/liquid/",
              owner: {
                url: "https://github.com/Shopify",
                login: "Shopify",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/8085?s=20&v=4",
                __typename: "Organization",
              },
              url: "https://github.com/Shopify/liquid",
              __typename: "Repository",
            },
            {
              nameWithOwner: "Shopify/sarama",
              createdAt: "2013-07-05T18:52:38Z",
              description: "Sarama is a Go library for Apache Kafka.",
              stargazerCount: 8180,
              forkCount: 1413,
              name: "sarama",
              homepageUrl: "https://shopify.github.io/sarama",
              owner: {
                url: "https://github.com/Shopify",
                login: "Shopify",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/8085?s=20&v=4",
                __typename: "Organization",
              },
              url: "https://github.com/Shopify/sarama",
              __typename: "Repository",
            },
            {
              nameWithOwner: "Shopify/toxiproxy",
              createdAt: "2014-09-04T13:56:38Z",
              description:
                ":alarm_clock: :fire: A TCP proxy to simulate network and system conditions for chaos and resiliency testing",
              stargazerCount: 7806,
              forkCount: 360,
              name: "toxiproxy",
              homepageUrl: "http://toxiproxy.io",
              owner: {
                url: "https://github.com/Shopify",
                login: "Shopify",
                avatarUrl:
                  "https://avatars.githubusercontent.com/u/8085?s=20&v=4",
                __typename: "Organization",
              },
              url: "https://github.com/Shopify/toxiproxy",
              __typename: "Repository",
            },
          ],
          __typename: "SearchResultItemConnection",
        },
      },
    },
  },
];

it("successfully renders some HTML", () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mockApiCall} addTypename={false}>
      <App />
    </MockedProvider>
  );

  expect(component).toMatchSnapshot();
});

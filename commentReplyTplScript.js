var commentReplyData = [
  {
    comment: "Hi",
    reply: [
      {
        comment: "Hi",
        reply: [
          { comment: "Hi" },
          {
            comment: "Hello",
            reply: [
              {
                comment: "Hi",
                reply: [
                  {
                    comment: "Hi",
                    reply: [
                      { comment: "Hi" },
                      { comment: "Hello" },
                      { comment: "Hey" },
                    ],
                  },
                  { comment: "Hello" },
                  { comment: "Hey" },
                ],
              },
              { comment: "Hello" },
              { comment: "Hey" },
            ],
          },
          { comment: "Hey" },
        ],
      },
      {
        comment: "Hi",
        reply: [],
      },
      {
        comment: "Hi",
        reply: [
          {
            comment: "Hi",
            reply: [
              { comment: "Hi" },
              { comment: "Hello" },
              { comment: "Hey" },
            ],
          },
          { comment: "Hello" },
          { comment: "Hey" },
        ],
      },
    ],
  },
  {
    comment: "Hi",
    reply: [
      {
        comment: "Hi",
        reply: [
          { comment: "Hi" },
          {
            comment: "Hello",
            reply: [
              { comment: "Hi" },
              { comment: "Hello" },
              { comment: "Hey" },
            ],
          },
          { comment: "Hey" },
        ],
      },
      {
        comment: "Hi",
        reply: [],
      },
      {
        comment: "Hi",
        reply: [
          {
            comment: "Hi",
            reply: [
              { comment: "Hi" },
              { comment: "Hello" },
              { comment: "Hey" },
            ],
          },
          { comment: "Hello" },
          { comment: "Hey" },
        ],
      },
    ],
  },
  {
    comment: "Hi",
    reply: [
      {
        comment: "Hi",
        reply: [
          { comment: "Hi" },
          {
            comment: "Hello",
            reply: [
              { comment: "Hi" },
              { comment: "Hello" },
              { comment: "Hey" },
            ],
          },
          { comment: "Hey" },
        ],
      },
      {
        comment: "Hi",
        reply: [],
      },
      {
        comment: "Hi",
        reply: [
          {
            comment: "Hi",
            reply: [
              { comment: "Hi" },
              { comment: "Hello" },
              { comment: "Hey" },
            ],
          },
          { comment: "Hello" },
          { comment: "Hey" },
        ],
      },
    ],
  },
];

function getCommentTemplate(commentReplyData) {
  return `<ol> 
                ${commentReplyData
                  .map(function (commentData) {
                    return `<li>
                                ${commentData.comment}
                                ${
                                  commentData.reply
                                    ? getCommentTemplate(commentData.reply)
                                    : ""
                                }
                            </li>`;
                  })
                  .join("")}
            </ol>`;
}
var commentReplyHtml = getCommentTemplate(commentReplyData);
console.log(commentReplyHtml);
document.write(commentReplyHtml);

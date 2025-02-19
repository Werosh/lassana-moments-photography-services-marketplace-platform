import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaRegStar } from "react-icons/fa"; // default star
import { FaStar } from "react-icons/fa6"; // clicked star
import { FaRegHeart } from "react-icons/fa"; // default heart
import { FaHeart } from "react-icons/fa"; // clicked heart
import { BsThreeDotsVertical } from "react-icons/bs"; // for three dots
import { ImReply } from "react-icons/im"; // for reply
import { PiPaperPlaneRightLight } from "react-icons/pi"; // for submit button
import { FaTimes } from "react-icons/fa"; // for close button
import { FaPenToSquare } from "react-icons/fa6"; // for edit
import { MdOutlineDelete } from "react-icons/md"; // for delete 

const ReviewMain = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Adam Eddrian",
      timeAgo: "1 hour ago",
      text: "We are so grateful for the incredible wedding photos you captured! Every moment feels alive in the pictures, and we can't stop looking at them. Thank you for making our day so memorable! ❤️",
      likes: 100000,
      rating: 5,
      isLiked: false,
      replies: [
        {
          id: 1,
          author: "You",
          timeAgo: "30 minutes ago",
          text: "Thank you so much for your kind words! It was a pleasure capturing your special day.",
          likes: 5,
          isLiked: false,
        }
      ],
      showReplyBox: false,
      isOwnReview: false,
    },
    {
      id: 2,
      author: "Adam Eddrian",
      timeAgo: "1 hour ago",
      text: "We are so grateful for the incredible wedding photos you captured! Every moment feels alive in the pictures, and we can't stop looking at them. Thank you for making our day so memorable! ❤️",
      likes: 100000,
      rating: 5,
      isLiked: false,
      replies: [],
      showReplyBox: false,
      isOwnReview: false,
    },
    {
      id: 3,
      author: "You",
      timeAgo: "3 hours ago",
      text: "The portrait session exceeded my expectations! I love how you captured my personality in the photos. Thank you for making me feel comfortable during the shoot.",
      likes: 50,
      rating: 4,
      isLiked: false,
      replies: [
        {
          id: 1,
          author: "Jane Smith",
          timeAgo: "2 hours ago",
          text: "Your photos look amazing! Who was your photographer?",
          likes: 2,
          isLiked: false,
        },
        {
          id: 2,
          author: "You",
          timeAgo: "1 hour ago",
          text: "Thank you! I worked with PhotoStudio on Main Street. They're fantastic!",
          likes: 1,
          isLiked: false,
        }
      ],
      showReplyBox: false,
      isOwnReview: true,
    },
    {
      id: 4,
      author: "Adam Eddrian",
      timeAgo: "1 hour ago",
      text: "We are so grateful for the incredible wedding photos you captured! Every moment feels alive in the pictures, and we can't stop looking at them. Thank you for making our day so memorable! ❤️",
      likes: 100000,
      rating: 5,
      isLiked: false,
      replies: [],
      showReplyBox: false,
      isOwnReview: false,
    },
    {
      id: 5,
      author: "Adam Eddrian",
      timeAgo: "1 hour ago",
      text: "We are so grateful for the incredible wedding photos you captured! Every moment feels alive in the pictures, and we can't stop looking at them. Thank you for making our day so memorable! ❤️",
      likes: 100000,
      rating: 5,
      isLiked: false,
      replies: [],
      showReplyBox: false,
      isOwnReview: false,
    },
    {
      id: 6,
      author: "You",
      timeAgo: "2 days ago",
      text: "Amazing family photoshoot! Our kids had so much fun, and the photos turned out perfect. The natural lighting you chose made everyone look fantastic!",
      likes: 125,
      rating: 5,
      isLiked: false,
      replies: [],
      showReplyBox: false,
      isOwnReview: true,
    },
    {
      id: 7,
      author: "Adam Eddrian",
      timeAgo: "1 hour ago",
      text: "We are so grateful for the incredible wedding photos you captured! Every moment feels alive in the pictures, and we can't stop looking at them. Thank you for making our day so memorable! ❤️",
      likes: 100000,
      rating: 5,
      isLiked: false,
      replies: [],
      showReplyBox: false,
      isOwnReview: false,
    },
    {
      id: 8,
      author: "Adam Eddrian",
      timeAgo: "1 hour ago",
      text: "We are so grateful for the incredible wedding photos you captured! Every moment feels alive in the pictures, and we can't stop looking at them. Thank you for making our day so memorable! ❤️",
      likes: 100000,
      rating: 5,
      isLiked: false,
      replies: [],
      showReplyBox: false,
      isOwnReview: false,
    },
    {
      id: 9,
      author: "Adam Eddrian",
      timeAgo: "1 hour ago",
      text: "We are so grateful for the incredible wedding photos you captured! Every moment feels alive in the pictures, and we can't stop looking at them. Thank you for making our day so memorable! ❤️",
      likes: 100000,
      rating: 5,
      isLiked: false,
      replies: [],
      showReplyBox: false,
      isOwnReview: false,
    },
    {
      id: 10,
      author: "Adam Eddrian",
      timeAgo: "1 hour ago",
      text: "We are so grateful for the incredible wedding photos you captured! Every moment feels alive in the pictures, and we can't stop looking at them. Thank you for making our day so memorable! ❤️",
      likes: 100000,
      rating: 5,
      isLiked: false,
      replies: [],
      showReplyBox: false,
      isOwnReview: false,
    },
  ]);

  const [newReview, setNewReview] = useState("");
  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [replyText, setReplyText] = useState({});
  const [menuOpen, setMenuOpen] = useState(null);
  const [replyMenuOpen, setReplyMenuOpen] = useState({ reviewId: null, replyId: null });
  const [editingReview, setEditingReview] = useState(null);
  const menuRef = useRef(null);
  const replyMenuRef = useRef(null);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;

    if (editingReview) {
      // Update existing review
      setReviews(
        reviews.map((review) => {
          if (review.id === editingReview) {
            return {
              ...review,
              text: newReview,
              rating: userRating || review.rating,
              timeAgo: "Just edited",
            };
          }
          return review;
        })
      );
      setEditingReview(null);
    } else {
      // Create new review
      const review = {
        id: Math.max(...reviews.map(r => r.id)) + 1,
        author: "You",
        timeAgo: "Just now",
        text: newReview,
        likes: 0,
        rating: userRating || 5,
        isLiked: false,
        replies: [],
        showReplyBox: false,
        isOwnReview: true,
      };

      setReviews([...reviews, review]);
    }

    setNewReview("");
    setUserRating(0);
  };

  const handleLike = (id) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === id) {
          return {
            ...review,
            likes: review.isLiked ? review.likes - 1 : review.likes + 1,
            isLiked: !review.isLiked,
          };
        }
        return review;
      })
    );
  };

  const toggleReplyBox = (id) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === id) {
          return {
            ...review,
            showReplyBox: !review.showReplyBox,
          };
        }
        return review;
      })
    );
  };

  const handleReplyChange = (id, text) => {
    setReplyText({
      ...replyText,
      [id]: text,
    });
  };

  const submitReply = (id) => {
    if (!replyText[id] || !replyText[id].trim()) return;

    setReviews(
      reviews.map((review) => {
        if (review.id === id) {
          const newReply = {
            id: review.replies.length + 1,
            author: "You",
            timeAgo: "Just now",
            text: replyText[id],
            likes: 0,
            isLiked: false,
          };
          return {
            ...review,
            replies: [...review.replies, newReply],
            showReplyBox: false,
          };
        }
        return review;
      })
    );

    // Clear reply text for this review
    setReplyText({
      ...replyText,
      [id]: "",
    });
  };

  const toggleMenu = (id) => {
    setMenuOpen(menuOpen === id ? null : id);
  };

  const toggleReplyMenu = (reviewId, replyId) => {
    if (replyMenuOpen.reviewId === reviewId && replyMenuOpen.replyId === replyId) {
      setReplyMenuOpen({ reviewId: null, replyId: null });
    } else {
      setReplyMenuOpen({ reviewId, replyId });
    }
  };

  const handleEditReview = (review) => {
    setNewReview(review.text);
    setUserRating(review.rating);
    setEditingReview(review.id);
    setMenuOpen(null);
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const handleDeleteReview = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
    setMenuOpen(null);
  };

  const handleDeleteReply = (reviewId, replyId) => {
    setReviews(
      reviews.map((review) => {
        if (review.id === reviewId) {
          return {
            ...review,
            replies: review.replies.filter((reply) => reply.id !== replyId)
          };
        }
        return review;
      })
    );
    setReplyMenuOpen({ reviewId: null, replyId: null });
  };

  const cancelEdit = () => {
    setNewReview("");
    setUserRating(0);
    setEditingReview(null);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(null);
      }
      if (replyMenuRef.current && !replyMenuRef.current.contains(event.target)) {
        setReplyMenuOpen({ reviewId: null, replyId: null });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, replyMenuRef]);

  return (
    <div className="relative mx-auto w-full h-screen flex items-center justify-center font-['Poppins'] ">
      {/* Background Images Section */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <div className="relative h-64 max-w-6xl mx-auto">
          {/* First floating image - left side */}
          <motion.div
            className="absolute left-4 mt-20"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <div className="w-72 h-[550px] bg-gradient-to-b from-green-200 to-teal-200 rounded-xl opacity-30 shadow-lg">
              <img
                src="https://www.parents.com/thmb/GExGCp2zHxDIKxnCtx4QykPFqAs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1407570793-5f7481ec66794bdb8f67f27f1a9cf6d2.jpg"
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </motion.div>

          {/* Second floating image - center */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-8"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <div className="w-72 h-[550px] bg-gradient-to-b from-green-200 to-teal-200 rounded-xl opacity-30 shadow-lg">
              <img
                src="https://thumbs.dreamstime.com/b/its-all-being-girl-small-girl-outdoors-beauty-look-child-girl-little-girl-summer-style-fashion-beauty-causal-style-189002798.jpg"
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </motion.div>

          {/* Third floating image - right side */}
          <motion.div
            className="absolute right-4 top-4 mt-20"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            <div className="w-72 h-[550px] bg-gradient-to-b from-green-200 to-teal-200 rounded-xl opacity-30 shadow-lg">
              <img
                src="https://static.toiimg.com/thumb/105145144/105145144.jpg?height=746&width=420&resizemode=76&imgsize=97920"
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* contents */}
      <div className="rounded-lg shadow-lg p-6 max-w-6xl m-auto z-10 mt-50">
        {/* Text Area */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#115c86] mb-2">
            What Our Customers Are Saying
          </h2>
          <p className="text-[#115c86] text-md">
            We value feedback from our customers and are proud to share their
            experiences.
          </p>
        </div>

        {/* Grid area */}
        <div className="overflow-y-scroll h-[60vh]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gradient-to-b from-aliceBlue to-blue-200 rounded-lg p-4 relative"
              >
                {review.isOwnReview && (
                  <div className="relative" ref={menuRef}>
                    <button 
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                      onClick={() => toggleMenu(review.id)}
                    >
                      <BsThreeDotsVertical className="w-5 h-5" />
                    </button>
                    
                    {menuOpen === review.id && (
                      <div className="absolute top-8 right-2 bg-white shadow-lg rounded-md py-1 z-10">
                        <button
                          onClick={() => handleEditReview(review)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        >
                          <FaPenToSquare className="w-4 h-4" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteReview(review.id)}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                        >
                          <MdOutlineDelete className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                )}
                
                {!review.isOwnReview && (
                  <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
                    <BsThreeDotsVertical className="w-5 h-5" />
                  </button>
                )}

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full" />
                  <div>
                    <p className="font-semibold text-sm">{review.author}</p>
                    <p className="text-xs text-gray-500">{review.timeAgo}</p>
                  </div>
                </div>

                <div className="flex mb-2">
                  {[...Array(7)].map((_, i) => (
                    <span key={i}>
                      {i < review.rating ? (
                        <FaStar className="w-4 h-4 text-blue-500" />
                      ) : (
                        <FaRegStar className="w-4 h-4 text-blue-500" />
                      )}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-700 mb-4">{review.text}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <button
                    onClick={() => handleLike(review.id)}
                    className="flex items-center gap-1 transition-colors duration-300 hover:text-red-500"
                  >
                    {review.isLiked ? (
                      <FaHeart className="w-4 h-4 text-red-500" />
                    ) : (
                      <FaRegHeart className="w-4 h-4" />
                    )}
                    <span>{formatNumber(review.likes)}</span>
                  </button>
                  <button
                    onClick={() => toggleReplyBox(review.id)}
                    className="flex items-center gap-1 hover:text-blue-500 transition-colors duration-300"
                  >
                    <ImReply className="w-4 h-4" />
                    Reply
                  </button>
                </div>

                {/* Replies Section */}
                {review.replies.length > 0 && (
                  <div className="mt-4 border-t pt-2">
                    <p className="text-xs text-gray-500 mb-2">
                      {review.replies.length}{" "}
                      {review.replies.length === 1 ? "reply" : "replies"}
                    </p>
                    {review.replies.map((reply) => (
                      <div key={reply.id} className="mb-2 pl-4 border-l-2 border-blue-200 relative">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-gray-200 rounded-full" />
                          <div>
                            <p className="font-semibold text-xs">{reply.author}</p>
                            <p className="text-xs text-gray-500">{reply.timeAgo}</p>
                          </div>
                          
                          {reply.author === "You" && (
                            <div className="relative ml-auto" ref={replyMenuRef}>
                              <button 
                                className="text-gray-400 hover:text-gray-600"
                                onClick={() => toggleReplyMenu(review.id, reply.id)}
                              >
                                <BsThreeDotsVertical className="w-4 h-4" />
                              </button>
                              
                              {replyMenuOpen.reviewId === review.id && 
                               replyMenuOpen.replyId === reply.id && (
                                <div className="absolute top-4 right-0 bg-white shadow-lg rounded-md py-1 z-10 w-24">
                                  <button
                                    onClick={() => handleDeleteReply(review.id, reply.id)}
                                    className="flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-gray-100 w-full text-left"
                                  >
                                    <MdOutlineDelete className="w-3 h-3" />
                                    Delete
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-gray-700 ml-8">{reply.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Reply Box with Animation */}
                <AnimatePresence>
                  {review.showReplyBox && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 overflow-hidden"
                    >
                      <div className="relative bg-white rounded-lg p-2 shadow-sm border">
                        <button
                          onClick={() => toggleReplyBox(review.id)}
                          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                        >
                          <FaTimes className="w-3 h-3" />
                        </button>
                        <textarea
                          className="w-full p-2 text-sm border-none rounded-md focus:border-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 resize-none"
                          placeholder="Write your reply..."
                          rows="2"
                          value={replyText[review.id] || ""}
                          onChange={(e) => handleReplyChange(review.id, e.target.value)}
                        />
                        <div className="flex justify-end mt-2">
                          <button
                            onClick={() => submitReply(review.id)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1 transition-colors duration-300"
                          >
                            Reply
                            <PiPaperPlaneRightLight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmitReview} className="mt-4">
          <div className="mb-3">
            <label className="block text-gray-700 mb-2">
              {editingReview ? "Edit Your Rating:" : "Your Rating:"}
            </label>
            <div className="flex mb-2">
              {[...Array(7)].map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setUserRating(i + 1)}
                  onMouseEnter={() => setHoveredRating(i + 1)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="focus:outline-none mr-1 transition-transform duration-200 hover:scale-110"
                >
                  {i < (hoveredRating || userRating) ? (
                    <FaStar className="w-6 h-6 text-blue-500" />
                  ) : (
                    <FaRegStar className="w-6 h-6 text-blue-500" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <textarea
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder={editingReview ? "Edit your review..." : "Write your comment here..."}
              rows="3"
              value={newReview}
              onChange={(e) => setNewReview(e.target.value)}
            />
            <div className="absolute bottom-3 right-3 flex gap-2">
              {editingReview && (
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors duration-300"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors duration-300"
              >
                {editingReview ? "Update Review" : "Write Review"}
                <PiPaperPlaneRightLight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewMain;
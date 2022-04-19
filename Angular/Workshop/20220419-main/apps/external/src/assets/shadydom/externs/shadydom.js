/**
 * @fileoverview Externs for closure compiler
 * @externs
 */

/**
 * Upstream to closure-compiler
 * @type {string}
 */
Element.prototype.slot;

/**
 * Block renaming of properties added to Window to
 * prevent conflicts with other closure-compiler code.
 * @type {Object}
 */
Window.prototype.__handlers;

/**
 * Block renaming of properties added to Node to
 * prevent conflicts with other closure-compiler code.
 * @type {Object}
 */
Node.prototype.__handlers;

/** @type {Object} */
Node.prototype.__shady;

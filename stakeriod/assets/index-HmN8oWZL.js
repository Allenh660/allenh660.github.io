function e(e, t) {
  const n = Object.create(null),
    r = e.split(",");
  for (let o = 0; o < r.length; o++) n[r[o]] = !0;
  return t ? (e) => !!n[e.toLowerCase()] : (e) => !!n[e];
}
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
            ? (t.credentials = "omit")
            : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
const t = {},
  n = [],
  r = () => { },
  o = () => !1,
  s = /^on[^a-z]/,
  a = (e) => s.test(e),
  l = (e) => e.startsWith("onUpdate:"),
  c = Object.assign,
  i = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  u = Object.prototype.hasOwnProperty,
  f = (e, t) => u.call(e, t),
  p = Array.isArray,
  d = (e) => "[object Map]" === E(e),
  m = (e) => "[object Set]" === E(e),
  h = (e) => "function" == typeof e,
  _ = (e) => "string" == typeof e,
  g = (e) => "symbol" == typeof e,
  v = (e) => null !== e && "object" == typeof e,
  y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch),
  b = Object.prototype.toString,
  E = (e) => b.call(e),
  k = (e) => E(e).slice(8, -1),
  L = (e) => "[object Object]" === E(e),
  C = (e) => _(e) && "NaN" !== e && "-" !== e[0] && "" + parseInt(e, 10) === e,
  N = e(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  T = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  O = /-(\w)/g,
  S = T((e) => e.replace(O, (e, t) => (t ? t.toUpperCase() : ""))),
  I = /\B([A-Z])/g,
  w = T((e) => e.replace(I, "-$1").toLowerCase()),
  A = T((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  P = T((e) => (e ? `on${A(e)}` : "")),
  x = (e, t) => !Object.is(e, t),
  R = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  F = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  M = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  D = (e) => {
    const t = _(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let U;
const $ = () =>
  U ||
  (U =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : {});
function W(e) {
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n],
        o = _(r) ? B(r) : W(r);
      if (o) for (const e in o) t[e] = o[e];
    }
    return t;
  }
  if (_(e) || v(e)) return e;
}
const j = /;(?![^(]*\))/g,
  V = /:([^]+)/,
  H = /\/\*[^]*?\*\//g;
function B(e) {
  const t = {};
  return (
    e
      .replace(H, "")
      .split(j)
      .forEach((e) => {
        if (e) {
          const n = e.split(V);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function G(e) {
  let t = "";
  if (_(e)) t = e;
  else if (p(e))
    for (let n = 0; n < e.length; n++) {
      const r = G(e[n]);
      r && (t += r + " ");
    }
  else if (v(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const Y = e(
  "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
);
function X(e) {
  return !!e || "" === e;
}
const K = (e) =>
  _(e)
    ? e
    : null == e
      ? ""
      : p(e) || (v(e) && (e.toString === b || !h(e.toString)))
        ? JSON.stringify(e, z, 2)
        : String(e),
  z = (e, t) =>
    t && t.__v_isRef
      ? z(e, t.value)
      : d(t)
        ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (e, [t, n]) => ((e[`${t} =>`] = n), e),
            {}
          ),
        }
        : m(t)
          ? { [`Set(${t.size})`]: [...t.values()] }
          : !v(t) || p(t) || L(t)
            ? t
            : String(t);
let q;
class J {
  constructor(e = !1) {
    (this.detached = e),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = q),
      !e && q && (this.index = (q.scopes || (q.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(e) {
    if (this._active) {
      const t = q;
      try {
        return (q = this), e();
      } finally {
        q = t;
      }
    }
  }
  on() {
    q = this;
  }
  off() {
    q = this.parent;
  }
  stop(e) {
    if (this._active) {
      let t, n;
      for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
      for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
      if (!this.detached && this.parent && !e) {
        const e = this.parent.scopes.pop();
        e &&
          e !== this &&
          ((this.parent.scopes[this.index] = e), (e.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Q(e) {
  return new J(e);
}
function Z() {
  return q;
}
function ee(e) {
  q && q.cleanups.push(e);
}
const te = (e) => {
  const t = new Set(e);
  return (t.w = 0), (t.n = 0), t;
},
  ne = (e) => (e.w & ae) > 0,
  re = (e) => (e.n & ae) > 0,
  oe = new WeakMap();
let se = 0,
  ae = 1;
const le = 30;
let ce;
const ie = Symbol(""),
  ue = Symbol("");
class fe {
  constructor(e, t = null, n) {
    (this.fn = e),
      (this.scheduler = t),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      (function (e, t = q) {
        t && t.active && t.effects.push(e);
      })(this, n);
  }
  run() {
    if (!this.active) return this.fn();
    let e = ce,
      t = de;
    for (; e;) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = ce),
        (ce = this),
        (de = !0),
        (ae = 1 << ++se),
        se <= le
          ? (({ deps: e }) => {
            if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ae;
          })(this)
          : pe(this),
        this.fn()
      );
    } finally {
      se <= le &&
        ((e) => {
          const { deps: t } = e;
          if (t.length) {
            let n = 0;
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              ne(o) && !re(o) ? o.delete(e) : (t[n++] = o),
                (o.w &= ~ae),
                (o.n &= ~ae);
            }
            t.length = n;
          }
        })(this),
        (ae = 1 << --se),
        (ce = this.parent),
        (de = t),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    ce === this
      ? (this.deferStop = !0)
      : this.active &&
      (pe(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function pe(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let de = !0;
const me = [];
function he() {
  me.push(de), (de = !1);
}
function _e() {
  const e = me.pop();
  de = void 0 === e || e;
}
function ge(e, t, n) {
  if (de && ce) {
    let t = oe.get(e);
    t || oe.set(e, (t = new Map()));
    let r = t.get(n);
    r || t.set(n, (r = te())), ve(r);
  }
}
function ve(e, t) {
  let n = !1;
  se <= le ? re(e) || ((e.n |= ae), (n = !ne(e))) : (n = !e.has(ce)),
    n && (e.add(ce), ce.deps.push(e));
}
function ye(e, t, n, r, o, s) {
  const a = oe.get(e);
  if (!a) return;
  let l = [];
  if ("clear" === t) l = [...a.values()];
  else if ("length" === n && p(e)) {
    const e = Number(r);
    a.forEach((t, n) => {
      ("length" === n || (!g(n) && n >= e)) && l.push(t);
    });
  } else
    switch ((void 0 !== n && l.push(a.get(n)), t)) {
      case "add":
        p(e)
          ? C(n) && l.push(a.get("length"))
          : (l.push(a.get(ie)), d(e) && l.push(a.get(ue)));
        break;
      case "delete":
        p(e) || (l.push(a.get(ie)), d(e) && l.push(a.get(ue)));
        break;
      case "set":
        d(e) && l.push(a.get(ie));
    }
  if (1 === l.length) l[0] && be(l[0]);
  else {
    const e = [];
    for (const t of l) t && e.push(...t);
    be(te(e));
  }
}
function be(e, t) {
  const n = p(e) ? e : [...e];
  for (const r of n) r.computed && Ee(r);
  for (const r of n) r.computed || Ee(r);
}
function Ee(e, t) {
  (e !== ce || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
const ke = e("__proto__,__v_isRef,__isVue"),
  Le = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => "arguments" !== e && "caller" !== e)
      .map((e) => Symbol[e])
      .filter(g)
  ),
  Ce = Ne();
function Ne() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...e) {
        const n = pt(this);
        for (let t = 0, o = this.length; t < o; t++) ge(n, 0, t + "");
        const r = n[t](...e);
        return -1 === r || !1 === r ? n[t](...e.map(pt)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...e) {
        he();
        const n = pt(this)[t].apply(this, e);
        return _e(), n;
      };
    }),
    e
  );
}
function Te(e) {
  const t = pt(this);
  return ge(t, 0, e), t.hasOwnProperty(e);
}
class Oe {
  constructor(e = !1, t = !1) {
    (this._isReadonly = e), (this._shallow = t);
  }
  get(e, t, n) {
    const r = this._isReadonly,
      o = this._shallow;
    if ("__v_isReactive" === t) return !r;
    if ("__v_isReadonly" === t) return r;
    if ("__v_isShallow" === t) return o;
    if ("__v_raw" === t && n === (r ? (o ? rt : nt) : o ? tt : et).get(e))
      return e;
    const s = p(e);
    if (!r) {
      if (s && f(Ce, t)) return Reflect.get(Ce, t, n);
      if ("hasOwnProperty" === t) return Te;
    }
    const a = Reflect.get(e, t, n);
    return (g(t) ? Le.has(t) : ke(t))
      ? a
      : (r || ge(e, 0, t),
        o
          ? a
          : vt(a)
            ? s && C(t)
              ? a
              : a.value
            : v(a)
              ? r
                ? at(a)
                : ot(a)
              : a);
  }
}
class Se extends Oe {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, n, r) {
    let o = e[t];
    if (it(o) && vt(o) && !vt(n)) return !1;
    if (
      !this._shallow &&
      (ut(n) || it(n) || ((o = pt(o)), (n = pt(n))), !p(e) && vt(o) && !vt(n))
    )
      return (o.value = n), !0;
    const s = p(e) && C(t) ? Number(t) < e.length : f(e, t),
      a = Reflect.set(e, t, n, r);
    return (
      e === pt(r) && (s ? x(n, o) && ye(e, "set", t, n) : ye(e, "add", t, n)), a
    );
  }
  deleteProperty(e, t) {
    const n = f(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && ye(e, "delete", t, void 0), r;
  }
  has(e, t) {
    const n = Reflect.has(e, t);
    return (g(t) && Le.has(t)) || ge(e, 0, t), n;
  }
  ownKeys(e) {
    return ge(e, 0, p(e) ? "length" : ie), Reflect.ownKeys(e);
  }
}
class Ie extends Oe {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return !0;
  }
  deleteProperty(e, t) {
    return !0;
  }
}
const we = new Se(),
  Ae = new Ie(),
  Pe = new Se(!0),
  xe = (e) => e,
  Re = (e) => Reflect.getPrototypeOf(e);
function Fe(e, t, n = !1, r = !1) {
  const o = pt((e = e.__v_raw)),
    s = pt(t);
  n || (x(t, s) && ge(o, 0, t), ge(o, 0, s));
  const { has: a } = Re(o),
    l = r ? xe : n ? ht : mt;
  return a.call(o, t)
    ? l(e.get(t))
    : a.call(o, s)
      ? l(e.get(s))
      : void (e !== o && e.get(t));
}
function Me(e, t = !1) {
  const n = this.__v_raw,
    r = pt(n),
    o = pt(e);
  return (
    t || (x(e, o) && ge(r, 0, e), ge(r, 0, o)),
    e === o ? n.has(e) : n.has(e) || n.has(o)
  );
}
function De(e, t = !1) {
  return (e = e.__v_raw), !t && ge(pt(e), 0, ie), Reflect.get(e, "size", e);
}
function Ue(e) {
  e = pt(e);
  const t = pt(this);
  return Re(t).has.call(t, e) || (t.add(e), ye(t, "add", e, e)), this;
}
function $e(e, t) {
  t = pt(t);
  const n = pt(this),
    { has: r, get: o } = Re(n);
  let s = r.call(n, e);
  s || ((e = pt(e)), (s = r.call(n, e)));
  const a = o.call(n, e);
  return (
    n.set(e, t), s ? x(t, a) && ye(n, "set", e, t) : ye(n, "add", e, t), this
  );
}
function We(e) {
  const t = pt(this),
    { has: n, get: r } = Re(t);
  let o = n.call(t, e);
  o || ((e = pt(e)), (o = n.call(t, e))), r && r.call(t, e);
  const s = t.delete(e);
  return o && ye(t, "delete", e, void 0), s;
}
function je() {
  const e = pt(this),
    t = 0 !== e.size,
    n = e.clear();
  return t && ye(e, "clear", void 0, void 0), n;
}
function Ve(e, t) {
  return function (n, r) {
    const o = this,
      s = o.__v_raw,
      a = pt(s),
      l = t ? xe : e ? ht : mt;
    return !e && ge(a, 0, ie), s.forEach((e, t) => n.call(r, l(e), l(t), o));
  };
}
function He(e, t, n) {
  return function (...r) {
    const o = this.__v_raw,
      s = pt(o),
      a = d(s),
      l = "entries" === e || (e === Symbol.iterator && a),
      c = "keys" === e && a,
      i = o[e](...r),
      u = n ? xe : t ? ht : mt;
    return (
      !t && ge(s, 0, c ? ue : ie),
      {
        next() {
          const { value: e, done: t } = i.next();
          return t
            ? { value: e, done: t }
            : { value: l ? [u(e[0]), u(e[1])] : u(e), done: t };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Be(e) {
  return function (...t) {
    return "delete" !== e && ("clear" === e ? void 0 : this);
  };
}
function Ge() {
  const e = {
    get(e) {
      return Fe(this, e);
    },
    get size() {
      return De(this);
    },
    has: Me,
    add: Ue,
    set: $e,
    delete: We,
    clear: je,
    forEach: Ve(!1, !1),
  },
    t = {
      get(e) {
        return Fe(this, e, !1, !0);
      },
      get size() {
        return De(this);
      },
      has: Me,
      add: Ue,
      set: $e,
      delete: We,
      clear: je,
      forEach: Ve(!1, !0),
    },
    n = {
      get(e) {
        return Fe(this, e, !0);
      },
      get size() {
        return De(this, !0);
      },
      has(e) {
        return Me.call(this, e, !0);
      },
      add: Be("add"),
      set: Be("set"),
      delete: Be("delete"),
      clear: Be("clear"),
      forEach: Ve(!0, !1),
    },
    r = {
      get(e) {
        return Fe(this, e, !0, !0);
      },
      get size() {
        return De(this, !0);
      },
      has(e) {
        return Me.call(this, e, !0);
      },
      add: Be("add"),
      set: Be("set"),
      delete: Be("delete"),
      clear: Be("clear"),
      forEach: Ve(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
      (e[o] = He(o, !1, !1)),
        (n[o] = He(o, !0, !1)),
        (t[o] = He(o, !1, !0)),
        (r[o] = He(o, !0, !0));
    }),
    [e, n, t, r]
  );
}
const [Ye, Xe, Ke, ze] = Ge();
function qe(e, t) {
  const n = t ? (e ? ze : Ke) : e ? Xe : Ye;
  return (t, r, o) =>
    "__v_isReactive" === r
      ? !e
      : "__v_isReadonly" === r
        ? e
        : "__v_raw" === r
          ? t
          : Reflect.get(f(n, r) && r in t ? n : t, r, o);
}
const Je = { get: qe(!1, !1) },
  Qe = { get: qe(!1, !0) },
  Ze = { get: qe(!0, !1) },
  et = new WeakMap(),
  tt = new WeakMap(),
  nt = new WeakMap(),
  rt = new WeakMap();
function ot(e) {
  return it(e) ? e : lt(e, !1, we, Je, et);
}
function st(e) {
  return lt(e, !1, Pe, Qe, tt);
}
function at(e) {
  return lt(e, !0, Ae, Ze, nt);
}
function lt(e, t, n, r, o) {
  if (!v(e)) return e;
  if (e.__v_raw && (!t || !e.__v_isReactive)) return e;
  const s = o.get(e);
  if (s) return s;
  const a =
    (l = e).__v_skip || !Object.isExtensible(l)
      ? 0
      : (function (e) {
        switch (e) {
          case "Object":
          case "Array":
            return 1;
          case "Map":
          case "Set":
          case "WeakMap":
          case "WeakSet":
            return 2;
          default:
            return 0;
        }
      })(k(l));
  var l;
  if (0 === a) return e;
  const c = new Proxy(e, 2 === a ? r : n);
  return o.set(e, c), c;
}
function ct(e) {
  return it(e) ? ct(e.__v_raw) : !(!e || !e.__v_isReactive);
}
function it(e) {
  return !(!e || !e.__v_isReadonly);
}
function ut(e) {
  return !(!e || !e.__v_isShallow);
}
function ft(e) {
  return ct(e) || it(e);
}
function pt(e) {
  const t = e && e.__v_raw;
  return t ? pt(t) : e;
}
function dt(e) {
  return F(e, "__v_skip", !0), e;
}
const mt = (e) => (v(e) ? ot(e) : e),
  ht = (e) => (v(e) ? at(e) : e);
function _t(e) {
  de && ce && ve((e = pt(e)).dep || (e.dep = te()));
}
function gt(e, t) {
  const n = (e = pt(e)).dep;
  n && be(n);
}
function vt(e) {
  return !(!e || !0 !== e.__v_isRef);
}
function yt(e) {
  return Et(e, !1);
}
function bt(e) {
  return Et(e, !0);
}
function Et(e, t) {
  return vt(e) ? e : new kt(e, t);
}
class kt {
  constructor(e, t) {
    (this.__v_isShallow = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = t ? e : pt(e)),
      (this._value = t ? e : mt(e));
  }
  get value() {
    return _t(this), this._value;
  }
  set value(e) {
    const t = this.__v_isShallow || ut(e) || it(e);
    (e = t ? e : pt(e)),
      x(e, this._rawValue) &&
      ((this._rawValue = e), (this._value = t ? e : mt(e)), gt(this));
  }
}
function Lt(e) {
  return vt(e) ? e.value : e;
}
const Ct = {
  get: (e, t, n) => Lt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return vt(o) && !vt(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, r);
  },
};
function Nt(e) {
  return ct(e) ? e : new Proxy(e, Ct);
}
class Tt {
  constructor(e, t, n) {
    (this._object = e),
      (this._key = t),
      (this._defaultValue = n),
      (this.__v_isRef = !0);
  }
  get value() {
    const e = this._object[this._key];
    return void 0 === e ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
  get dep() {
    return (
      (e = pt(this._object)),
      (t = this._key),
      null == (n = oe.get(e)) ? void 0 : n.get(t)
    );
    var e, t, n;
  }
}
class Ot {
  constructor(e) {
    (this._getter = e), (this.__v_isRef = !0), (this.__v_isReadonly = !0);
  }
  get value() {
    return this._getter();
  }
}
function St(e, t, n) {
  return vt(e)
    ? e
    : h(e)
      ? new Ot(e)
      : v(e) && arguments.length > 1
        ? It(e, t, n)
        : yt(e);
}
function It(e, t, n) {
  const r = e[t];
  return vt(r) ? r : new Tt(e, t, n);
}
class wt {
  constructor(e, t, n, r) {
    (this._setter = t),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new fe(e, () => {
        this._dirty || ((this._dirty = !0), gt(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = n);
  }
  get value() {
    const e = pt(this);
    return (
      _t(e),
      (!e._dirty && e._cacheable) ||
      ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
function At(e, t, n = !1) {
  let o, s;
  const a = h(e);
  a ? ((o = e), (s = r)) : ((o = e.get), (s = e.set));
  return new wt(o, s, a || !s, n);
}
function Pt(e, ...t) { }
function xt(e, t, n, r) {
  let o;
  try {
    o = r ? e(...r) : e();
  } catch (s) {
    Ft(s, t, n);
  }
  return o;
}
function Rt(e, t, n, r) {
  if (h(e)) {
    const o = xt(e, t, n, r);
    return (
      o &&
      y(o) &&
      o.catch((e) => {
        Ft(e, t, n);
      }),
      o
    );
  }
  const o = [];
  for (let s = 0; s < e.length; s++) o.push(Rt(e[s], t, n, r));
  return o;
}
function Ft(e, t, n, r = !0) {
  t && t.vnode;
  if (t) {
    let r = t.parent;
    const o = t.proxy,
      s = n;
    for (; r;) {
      const t = r.ec;
      if (t)
        for (let n = 0; n < t.length; n++) if (!1 === t[n](e, o, s)) return;
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) return void xt(a, null, 10, [e, o, s]);
  }
}
let Mt = !1,
  Dt = !1;
const Ut = [];
let $t = 0;
const Wt = [];
let jt = null,
  Vt = 0;
const Ht = Promise.resolve();
let Bt = null;
function Gt(e) {
  const t = Bt || Ht;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yt(e) {
  (Ut.length && Ut.includes(e, Mt && e.allowRecurse ? $t + 1 : $t)) ||
    (null == e.id
      ? Ut.push(e)
      : Ut.splice(
        (function (e) {
          let t = $t + 1,
            n = Ut.length;
          for (; t < n;) {
            const r = (t + n) >>> 1,
              o = Ut[r],
              s = qt(o);
            s < e || (s === e && o.pre) ? (t = r + 1) : (n = r);
          }
          return t;
        })(e.id),
        0,
        e
      ),
      Xt());
}
function Xt() {
  Mt || Dt || ((Dt = !0), (Bt = Ht.then(Qt)));
}
function Kt(e, t = Mt ? $t + 1 : 0) {
  for (; t < Ut.length; t++) {
    const e = Ut[t];
    e && e.pre && (Ut.splice(t, 1), t--, e());
  }
}
function zt(e) {
  if (Wt.length) {
    const e = [...new Set(Wt)];
    if (((Wt.length = 0), jt)) return void jt.push(...e);
    for (jt = e, jt.sort((e, t) => qt(e) - qt(t)), Vt = 0; Vt < jt.length; Vt++)
      jt[Vt]();
    (jt = null), (Vt = 0);
  }
}
const qt = (e) => (null == e.id ? 1 / 0 : e.id),
  Jt = (e, t) => {
    const n = qt(e) - qt(t);
    if (0 === n) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function Qt(e) {
  (Dt = !1), (Mt = !0), Ut.sort(Jt);
  try {
    for ($t = 0; $t < Ut.length; $t++) {
      const e = Ut[$t];
      e && !1 !== e.active && xt(e, null, 14);
    }
  } finally {
    ($t = 0),
      (Ut.length = 0),
      zt(),
      (Mt = !1),
      (Bt = null),
      (Ut.length || Wt.length) && Qt();
  }
}
function Zt(e, n, ...r) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || t;
  let s = r;
  const a = n.startsWith("update:"),
    l = a && n.slice(7);
  if (l && l in o) {
    const e = `${"modelValue" === l ? "model" : l}Modifiers`,
      { number: n, trim: a } = o[e] || t;
    a && (s = r.map((e) => (_(e) ? e.trim() : e))), n && (s = r.map(M));
  }
  let c,
    i = o[(c = P(n))] || o[(c = P(S(n)))];
  !i && a && (i = o[(c = P(w(n)))]), i && Rt(i, e, 6, s);
  const u = o[c + "Once"];
  if (u) {
    if (e.emitted) {
      if (e.emitted[c]) return;
    } else e.emitted = {};
    (e.emitted[c] = !0), Rt(u, e, 6, s);
  }
}
function en(e, t, n = !1) {
  const r = t.emitsCache,
    o = r.get(e);
  if (void 0 !== o) return o;
  const s = e.emits;
  let a = {},
    l = !1;
  if (!h(e)) {
    const r = (e) => {
      const n = en(e, t, !0);
      n && ((l = !0), c(a, n));
    };
    !n && t.mixins.length && t.mixins.forEach(r),
      e.extends && r(e.extends),
      e.mixins && e.mixins.forEach(r);
  }
  return s || l
    ? (p(s) ? s.forEach((e) => (a[e] = null)) : c(a, s), v(e) && r.set(e, a), a)
    : (v(e) && r.set(e, null), null);
}
function tn(e, t) {
  return (
    !(!e || !a(t)) &&
    ((t = t.slice(2).replace(/Once$/, "")),
      f(e, t[0].toLowerCase() + t.slice(1)) || f(e, w(t)) || f(e, t))
  );
}
let nn = null,
  rn = null;
function on(e) {
  const t = nn;
  return (nn = e), (rn = (e && e.type.__scopeId) || null), t;
}
function sn(e) {
  rn = e;
}
function an() {
  rn = null;
}
function ln(e, t = nn, n) {
  if (!t) return e;
  if (e._n) return e;
  const r = (...n) => {
    r._d && mo(-1);
    const o = on(t);
    let s;
    try {
      s = e(...n);
    } finally {
      on(o), r._d && mo(1);
    }
    return s;
  };
  return (r._n = !0), (r._c = !0), (r._d = !0), r;
}
function cn(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    props: s,
    propsOptions: [a],
    slots: c,
    attrs: i,
    emit: u,
    render: f,
    renderCache: p,
    data: d,
    setupState: m,
    ctx: h,
    inheritAttrs: _,
  } = e;
  let g, v;
  const y = on(e);
  try {
    if (4 & n.shapeFlag) {
      const e = o || r,
        t = e;
      (g = Io(f.call(t, e, p, s, m, d, h))), (v = i);
    } else {
      const e = t;
      0,
        (g = Io(
          e.length > 1 ? e(s, { attrs: i, slots: c, emit: u }) : e(s, null)
        )),
        (v = t.props ? i : un(i));
    }
  } catch (E) {
    (io.length = 0), Ft(E, e, 1), (g = Co(lo));
  }
  let b = g;
  if (v && !1 !== _) {
    const e = Object.keys(v),
      { shapeFlag: t } = b;
    e.length && 7 & t && (a && e.some(l) && (v = fn(v, a)), (b = No(b, v)));
  }
  return (
    n.dirs && ((b = No(b)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (b.transition = n.transition),
    (g = b),
    on(y),
    g
  );
}
const un = (e) => {
  let t;
  for (const n in e)
    ("class" === n || "style" === n || a(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
},
  fn = (e, t) => {
    const n = {};
    for (const r in e) (l(r) && r.slice(9) in t) || (n[r] = e[r]);
    return n;
  };
function pn(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < r.length; o++) {
    const s = r[o];
    if (t[s] !== e[s] && !tn(n, s)) return !0;
  }
  return !1;
}
const dn = "components";
function mn(e, t) {
  return gn(dn, e, !0, t) || e;
}
const hn = Symbol.for("v-ndc");
function _n(e) {
  return _(e) ? gn(dn, e, !1) || e : e || hn;
}
function gn(e, t, n = !0, r = !1) {
  const o = nn || Mo;
  if (o) {
    const n = o.type;
    if (e === dn) {
      const e = (function (e, t = !0) {
        return h(e) ? e.displayName || e.name : e.name || (t && e.__name);
      })(n, !1);
      if (e && (e === t || e === S(t) || e === A(S(t)))) return n;
    }
    const s = vn(o[e] || n[e], t) || vn(o.appContext[e], t);
    return !s && r ? n : s;
  }
}
function vn(e, t) {
  return e && (e[t] || e[S(t)] || e[A(S(t))]);
}
function yn(e, t) {
  return kn(e, null, t);
}
const bn = {};
function En(e, t, n) {
  return kn(e, t, n);
}
function kn(
  e,
  n,
  { immediate: o, deep: s, flush: a, onTrack: l, onTrigger: c } = t
) {
  var u;
  const f = Z() === (null == (u = Mo) ? void 0 : u.scope) ? Mo : null;
  let d,
    m,
    _ = !1,
    g = !1;
  if (
    (vt(e)
      ? ((d = () => e.value), (_ = ut(e)))
      : ct(e)
        ? ((d = () => e), (s = !0))
        : p(e)
          ? ((g = !0),
            (_ = e.some((e) => ct(e) || ut(e))),
            (d = () =>
              e.map((e) =>
                vt(e) ? e.value : ct(e) ? Nn(e) : h(e) ? xt(e, f, 2) : void 0
              )))
          : (d = h(e)
            ? n
              ? () => xt(e, f, 2)
              : () => {
                if (!f || !f.isUnmounted) return m && m(), Rt(e, f, 3, [y]);
              }
            : r),
      n && s)
  ) {
    const e = d;
    d = () => Nn(e());
  }
  let v,
    y = (e) => {
      m = L.onStop = () => {
        xt(e, f, 4), (m = L.onStop = void 0);
      };
    };
  if (Go) {
    if (
      ((y = r),
        n ? o && Rt(n, f, 3, [d(), g ? [] : void 0, y]) : d(),
        "sync" !== a)
    )
      return r;
    {
      const e = Zo();
      v = e.__watcherHandles || (e.__watcherHandles = []);
    }
  }
  let b = g ? new Array(e.length).fill(bn) : bn;
  const E = () => {
    if (L.active)
      if (n) {
        const e = L.run();
        (s || _ || (g ? e.some((e, t) => x(e, b[t])) : x(e, b))) &&
          (m && m(),
            Rt(n, f, 3, [e, b === bn ? void 0 : g && b[0] === bn ? [] : b, y]),
            (b = e));
      } else L.run();
  };
  let k;
  (E.allowRecurse = !!n),
    "sync" === a
      ? (k = E)
      : "post" === a
        ? (k = () => zr(E, f && f.suspense))
        : ((E.pre = !0), f && (E.id = f.uid), (k = () => Yt(E)));
  const L = new fe(d, k);
  n
    ? o
      ? E()
      : (b = L.run())
    : "post" === a
      ? zr(L.run.bind(L), f && f.suspense)
      : L.run();
  const C = () => {
    L.stop(), f && f.scope && i(f.scope.effects, L);
  };
  return v && v.push(C), C;
}
function Ln(e, t, n) {
  const r = this.proxy,
    o = _(e) ? (e.includes(".") ? Cn(r, e) : () => r[e]) : e.bind(r, r);
  let s;
  h(t) ? (s = t) : ((s = t.handler), (n = t));
  const a = Mo;
  jo(this);
  const l = kn(o, s.bind(r), n);
  return a ? jo(a) : Vo(), l;
}
function Cn(e, t) {
  const n = t.split(".");
  return () => {
    let t = e;
    for (let e = 0; e < n.length && t; e++) t = t[n[e]];
    return t;
  };
}
function Nn(e, t) {
  if (!v(e) || e.__v_skip) return e;
  if ((t = t || new Set()).has(e)) return e;
  if ((t.add(e), vt(e))) Nn(e.value, t);
  else if (p(e)) for (let n = 0; n < e.length; n++) Nn(e[n], t);
  else if (m(e) || d(e))
    e.forEach((e) => {
      Nn(e, t);
    });
  else if (L(e)) for (const n in e) Nn(e[n], t);
  return e;
}
function Tn(e, n) {
  const r = nn;
  if (null === r) return e;
  const o = zo(r) || r.proxy,
    s = e.dirs || (e.dirs = []);
  for (let a = 0; a < n.length; a++) {
    let [e, r, l, c = t] = n[a];
    e &&
      (h(e) && (e = { mounted: e, updated: e }),
        e.deep && Nn(r),
        s.push({
          dir: e,
          instance: o,
          value: r,
          oldValue: void 0,
          arg: l,
          modifiers: c,
        }));
  }
  return e;
}
function On(e, t, n, r) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let a = 0; a < o.length; a++) {
    const l = o[a];
    s && (l.oldValue = s[a].value);
    let c = l.dir[r];
    c && (he(), Rt(c, n, 8, [e.el, l, e, t]), _e());
  }
}
const Sn = Symbol("_leaveCb"),
  In = Symbol("_enterCb");
const wn = [Function, Array],
  An = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: wn,
    onEnter: wn,
    onAfterEnter: wn,
    onEnterCancelled: wn,
    onBeforeLeave: wn,
    onLeave: wn,
    onAfterLeave: wn,
    onLeaveCancelled: wn,
    onBeforeAppear: wn,
    onAppear: wn,
    onAfterAppear: wn,
    onAppearCancelled: wn,
  },
  Pn = {
    name: "BaseTransition",
    props: An,
    setup(e, { slots: t }) {
      const n = Do(),
        r = (function () {
          const e = {
            isMounted: !1,
            isLeaving: !1,
            isUnmounting: !1,
            leavingVNodes: new Map(),
          };
          return (
            zn(() => {
              e.isMounted = !0;
            }),
            Qn(() => {
              e.isUnmounting = !0;
            }),
            e
          );
        })();
      let o;
      return () => {
        const s = t.default && Un(t.default(), !0);
        if (!s || !s.length) return;
        let a = s[0];
        if (s.length > 1)
          for (const e of s)
            if (e.type !== lo) {
              a = e;
              break;
            }
        const l = pt(e),
          { mode: c } = l;
        if (r.isLeaving) return Fn(a);
        const i = Mn(a);
        if (!i) return Fn(a);
        const u = Rn(i, l, r, n);
        Dn(i, u);
        const f = n.subTree,
          p = f && Mn(f);
        let d = !1;
        const { getTransitionKey: m } = i.type;
        if (m) {
          const e = m();
          void 0 === o ? (o = e) : e !== o && ((o = e), (d = !0));
        }
        if (p && p.type !== lo && (!yo(i, p) || d)) {
          const e = Rn(p, l, r, n);
          if ((Dn(p, e), "out-in" === c))
            return (
              (r.isLeaving = !0),
              (e.afterLeave = () => {
                (r.isLeaving = !1), !1 !== n.update.active && n.update();
              }),
              Fn(a)
            );
          "in-out" === c &&
            i.type !== lo &&
            (e.delayLeave = (e, t, n) => {
              (xn(r, p)[String(p.key)] = p),
                (e[Sn] = () => {
                  t(), (e[Sn] = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = n);
            });
        }
        return a;
      };
    },
  };
function xn(e, t) {
  const { leavingVNodes: n } = e;
  let r = n.get(t.type);
  return r || ((r = Object.create(null)), n.set(t.type, r)), r;
}
function Rn(e, t, n, r) {
  const {
    appear: o,
    mode: s,
    persisted: a = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: i,
    onEnterCancelled: u,
    onBeforeLeave: f,
    onLeave: d,
    onAfterLeave: m,
    onLeaveCancelled: h,
    onBeforeAppear: _,
    onAppear: g,
    onAfterAppear: v,
    onAppearCancelled: y,
  } = t,
    b = String(e.key),
    E = xn(n, e),
    k = (e, t) => {
      e && Rt(e, r, 9, t);
    },
    L = (e, t) => {
      const n = t[1];
      k(e, t),
        p(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
    },
    C = {
      mode: s,
      persisted: a,
      beforeEnter(t) {
        let r = l;
        if (!n.isMounted) {
          if (!o) return;
          r = _ || l;
        }
        t[Sn] && t[Sn](!0);
        const s = E[b];
        s && yo(e, s) && s.el[Sn] && s.el[Sn](), k(r, [t]);
      },
      enter(e) {
        let t = c,
          r = i,
          s = u;
        if (!n.isMounted) {
          if (!o) return;
          (t = g || c), (r = v || i), (s = y || u);
        }
        let a = !1;
        const l = (e[In] = (t) => {
          a ||
            ((a = !0),
              k(t ? s : r, [e]),
              C.delayedLeave && C.delayedLeave(),
              (e[In] = void 0));
        });
        t ? L(t, [e, l]) : l();
      },
      leave(t, r) {
        const o = String(e.key);
        if ((t[In] && t[In](!0), n.isUnmounting)) return r();
        k(f, [t]);
        let s = !1;
        const a = (t[Sn] = (n) => {
          s ||
            ((s = !0),
              r(),
              k(n ? h : m, [t]),
              (t[Sn] = void 0),
              E[o] === e && delete E[o]);
        });
        (E[o] = e), d ? L(d, [t, a]) : a();
      },
      clone: (e) => Rn(e, t, n, r),
    };
  return C;
}
function Fn(e) {
  if (jn(e)) return ((e = No(e)).children = null), e;
}
function Mn(e) {
  return jn(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Dn(e, t) {
  6 & e.shapeFlag && e.component
    ? Dn(e.component.subTree, t)
    : 128 & e.shapeFlag
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
function Un(e, t = !1, n) {
  let r = [],
    o = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    const l = null == n ? a.key : String(n) + String(null != a.key ? a.key : s);
    a.type === so
      ? (128 & a.patchFlag && o++, (r = r.concat(Un(a.children, t, l))))
      : (t || a.type !== lo) && r.push(null != l ? No(a, { key: l }) : a);
  }
  if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
  return r;
}
/*! #__NO_SIDE_EFFECTS__ */ function $n(e, t) {
  return h(e) ? (() => c({ name: e.name }, t, { setup: e }))() : e;
}
const Wn = (e) => !!e.type.__asyncLoader,
  jn = (e) => e.type.__isKeepAlive;
function Vn(e, t) {
  Bn(e, "a", t);
}
function Hn(e, t) {
  Bn(e, "da", t);
}
function Bn(e, t, n = Mo) {
  const r =
    e.__wdc ||
    (e.__wdc = () => {
      let t = n;
      for (; t;) {
        if (t.isDeactivated) return;
        t = t.parent;
      }
      return e();
    });
  if ((Yn(t, r, n), n)) {
    let e = n.parent;
    for (; e && e.parent;)
      jn(e.parent.vnode) && Gn(r, t, n, e), (e = e.parent);
  }
}
function Gn(e, t, n, r) {
  const o = Yn(t, e, r, !0);
  Zn(() => {
    i(r[t], o);
  }, n);
}
function Yn(e, t, n = Mo, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return;
          he(), jo(n);
          const o = Rt(t, n, e, r);
          return Vo(), _e(), o;
        });
    return r ? o.unshift(s) : o.push(s), s;
  }
}
const Xn =
  (e) =>
    (t, n = Mo) =>
      (!Go || "sp" === e) && Yn(e, (...e) => t(...e), n),
  Kn = Xn("bm"),
  zn = Xn("m"),
  qn = Xn("bu"),
  Jn = Xn("u"),
  Qn = Xn("bum"),
  Zn = Xn("um"),
  er = Xn("sp"),
  tr = Xn("rtg"),
  nr = Xn("rtc");
function rr(e, t = Mo) {
  Yn("ec", e, t);
}
function or(e, t, n, r) {
  let o;
  const s = n && n[r];
  if (p(e) || _(e)) {
    o = new Array(e.length);
    for (let n = 0, r = e.length; n < r; n++)
      o[n] = t(e[n], n, void 0, s && s[n]);
  } else if ("number" == typeof e) {
    o = new Array(e);
    for (let n = 0; n < e; n++) o[n] = t(n + 1, n, void 0, s && s[n]);
  } else if (v(e))
    if (e[Symbol.iterator])
      o = Array.from(e, (e, n) => t(e, n, void 0, s && s[n]));
    else {
      const n = Object.keys(e);
      o = new Array(n.length);
      for (let r = 0, a = n.length; r < a; r++) {
        const a = n[r];
        o[r] = t(e[a], a, r, s && s[r]);
      }
    }
  else o = [];
  return n && (n[r] = o), o;
}
function sr(e, t) {
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (p(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
    else
      r &&
        (e[r.name] = r.key
          ? (...e) => {
            const t = r.fn(...e);
            return t && (t.key = r.key), t;
          }
          : r.fn);
  }
  return e;
}
function ar(e, t, n = {}, r, o) {
  if (nn.isCE || (nn.parent && Wn(nn.parent) && nn.parent.isCE))
    return "default" !== t && (n.name = t), Co("slot", n, r && r());
  let s = e[t];
  s && s._c && (s._d = !1), fo();
  const a = s && lr(s(n)),
    l = go(
      so,
      { key: n.key || (a && a.key) || `_${t}` },
      a || (r ? r() : []),
      a && 1 === e._ ? 64 : -2
    );
  return (
    !o && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]),
    s && s._c && (s._d = !0),
    l
  );
}
function lr(e) {
  return e.some(
    (e) => !vo(e) || (e.type !== lo && !(e.type === so && !lr(e.children)))
  )
    ? e
    : null;
}
const cr = (e) => (e ? (Ho(e) ? zo(e) || e.proxy : cr(e.parent)) : null),
  ir = c(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => cr(e.parent),
    $root: (e) => cr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => br(e),
    $forceUpdate: (e) => e.f || (e.f = () => Yt(e.update)),
    $nextTick: (e) => e.n || (e.n = Gt.bind(e.proxy)),
    $watch: (e) => Ln.bind(e),
  }),
  ur = (e, n) => e !== t && !e.__isScriptSetup && f(e, n),
  fr = {
    get({ _: e }, n) {
      const {
        ctx: r,
        setupState: o,
        data: s,
        props: a,
        accessCache: l,
        type: c,
        appContext: i,
      } = e;
      let u;
      if ("$" !== n[0]) {
        const c = l[n];
        if (void 0 !== c)
          switch (c) {
            case 1:
              return o[n];
            case 2:
              return s[n];
            case 4:
              return r[n];
            case 3:
              return a[n];
          }
        else {
          if (ur(o, n)) return (l[n] = 1), o[n];
          if (s !== t && f(s, n)) return (l[n] = 2), s[n];
          if ((u = e.propsOptions[0]) && f(u, n)) return (l[n] = 3), a[n];
          if (r !== t && f(r, n)) return (l[n] = 4), r[n];
          _r && (l[n] = 0);
        }
      }
      const p = ir[n];
      let d, m;
      return p
        ? ("$attrs" === n && ge(e, 0, n), p(e))
        : (d = c.__cssModules) && (d = d[n])
          ? d
          : r !== t && f(r, n)
            ? ((l[n] = 4), r[n])
            : ((m = i.config.globalProperties), f(m, n) ? m[n] : void 0);
    },
    set({ _: e }, n, r) {
      const { data: o, setupState: s, ctx: a } = e;
      return ur(s, n)
        ? ((s[n] = r), !0)
        : o !== t && f(o, n)
          ? ((o[n] = r), !0)
          : !f(e.props, n) &&
          ("$" !== n[0] || !(n.slice(1) in e)) &&
          ((a[n] = r), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: n,
          accessCache: r,
          ctx: o,
          appContext: s,
          propsOptions: a,
        },
      },
      l
    ) {
      let c;
      return (
        !!r[l] ||
        (e !== t && f(e, l)) ||
        ur(n, l) ||
        ((c = a[0]) && f(c, l)) ||
        f(o, l) ||
        f(ir, l) ||
        f(s.config.globalProperties, l)
      );
    },
    defineProperty(e, t, n) {
      return (
        null != n.get
          ? (e._.accessCache[t] = 0)
          : f(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
function pr() {
  return mr().slots;
}
function dr() {
  return mr().attrs;
}
function mr() {
  const e = Do();
  return e.setupContext || (e.setupContext = Ko(e));
}
function hr(e) {
  return p(e) ? e.reduce((e, t) => ((e[t] = null), e), {}) : e;
}
let _r = !0;
function gr(e) {
  const t = br(e),
    n = e.proxy,
    o = e.ctx;
  (_r = !1), t.beforeCreate && vr(t.beforeCreate, e, "bc");
  const {
    data: s,
    computed: a,
    methods: l,
    watch: c,
    provide: i,
    inject: u,
    created: f,
    beforeMount: d,
    mounted: m,
    beforeUpdate: _,
    updated: g,
    activated: y,
    deactivated: b,
    beforeDestroy: E,
    beforeUnmount: k,
    destroyed: L,
    unmounted: C,
    render: N,
    renderTracked: T,
    renderTriggered: O,
    errorCaptured: S,
    serverPrefetch: I,
    expose: w,
    inheritAttrs: A,
    components: P,
    directives: x,
    filters: R,
  } = t;
  if (
    (u &&
      (function (e, t, n = r) {
        p(e) && (e = Cr(e));
        for (const r in e) {
          const n = e[r];
          let o;
          (o = v(n)
            ? "default" in n
              ? xr(n.from || r, n.default, !0)
              : xr(n.from || r)
            : xr(n)),
            vt(o)
              ? Object.defineProperty(t, r, {
                enumerable: !0,
                configurable: !0,
                get: () => o.value,
                set: (e) => (o.value = e),
              })
              : (t[r] = o);
        }
      })(u, o, null),
      l)
  )
    for (const r in l) {
      const e = l[r];
      h(e) && (o[r] = e.bind(n));
    }
  if (s) {
    const t = s.call(n, n);
    v(t) && (e.data = ot(t));
  }
  if (((_r = !0), a))
    for (const p in a) {
      const e = a[p],
        t = h(e) ? e.bind(n, n) : h(e.get) ? e.get.bind(n, n) : r,
        s = !h(e) && h(e.set) ? e.set.bind(n) : r,
        l = qo({ get: t, set: s });
      Object.defineProperty(o, p, {
        enumerable: !0,
        configurable: !0,
        get: () => l.value,
        set: (e) => (l.value = e),
      });
    }
  if (c) for (const r in c) yr(c[r], o, n, r);
  if (i) {
    const e = h(i) ? i.call(n) : i;
    Reflect.ownKeys(e).forEach((t) => {
      Pr(t, e[t]);
    });
  }
  function F(e, t) {
    p(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
  }
  if (
    (f && vr(f, e, "c"),
      F(Kn, d),
      F(zn, m),
      F(qn, _),
      F(Jn, g),
      F(Vn, y),
      F(Hn, b),
      F(rr, S),
      F(nr, T),
      F(tr, O),
      F(Qn, k),
      F(Zn, C),
      F(er, I),
      p(w))
  )
    if (w.length) {
      const t = e.exposed || (e.exposed = {});
      w.forEach((e) => {
        Object.defineProperty(t, e, {
          get: () => n[e],
          set: (t) => (n[e] = t),
        });
      });
    } else e.exposed || (e.exposed = {});
  N && e.render === r && (e.render = N),
    null != A && (e.inheritAttrs = A),
    P && (e.components = P),
    x && (e.directives = x);
}
function vr(e, t, n) {
  Rt(p(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function yr(e, t, n, r) {
  const o = r.includes(".") ? Cn(n, r) : () => n[r];
  if (_(e)) {
    const n = t[e];
    h(n) && En(o, n);
  } else if (h(e)) En(o, e.bind(n));
  else if (v(e))
    if (p(e)) e.forEach((e) => yr(e, t, n, r));
    else {
      const r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
      h(r) && En(o, r, e);
    }
}
function br(e) {
  const t = e.type,
    { mixins: n, extends: r } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: a },
    } = e.appContext,
    l = s.get(t);
  let c;
  return (
    l
      ? (c = l)
      : o.length || n || r
        ? ((c = {}), o.length && o.forEach((e) => Er(c, e, a, !0)), Er(c, t, a))
        : (c = t),
    v(t) && s.set(t, c),
    c
  );
}
function Er(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Er(e, s, n, !0), o && o.forEach((t) => Er(e, t, n, !0));
  for (const a in t)
    if (r && "expose" === a);
    else {
      const r = kr[a] || (n && n[a]);
      e[a] = r ? r(e[a], t[a]) : t[a];
    }
  return e;
}
const kr = {
  data: Lr,
  props: Or,
  emits: Or,
  methods: Tr,
  computed: Tr,
  beforeCreate: Nr,
  created: Nr,
  beforeMount: Nr,
  mounted: Nr,
  beforeUpdate: Nr,
  updated: Nr,
  beforeDestroy: Nr,
  beforeUnmount: Nr,
  destroyed: Nr,
  unmounted: Nr,
  activated: Nr,
  deactivated: Nr,
  errorCaptured: Nr,
  serverPrefetch: Nr,
  components: Tr,
  directives: Tr,
  watch: function (e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = c(Object.create(null), e);
    for (const r in t) n[r] = Nr(e[r], t[r]);
    return n;
  },
  provide: Lr,
  inject: function (e, t) {
    return Tr(Cr(e), Cr(t));
  },
};
function Lr(e, t) {
  return t
    ? e
      ? function () {
        return c(
          h(e) ? e.call(this, this) : e,
          h(t) ? t.call(this, this) : t
        );
      }
      : t
    : e;
}
function Cr(e) {
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Nr(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Tr(e, t) {
  return e ? c(Object.create(null), e, t) : t;
}
function Or(e, t) {
  return e
    ? p(e) && p(t)
      ? [...new Set([...e, ...t])]
      : c(Object.create(null), hr(e), hr(null != t ? t : {}))
    : t;
}
function Sr() {
  return {
    app: null,
    config: {
      isNativeTag: o,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Ir = 0;
function wr(e, t) {
  return function (n, r = null) {
    h(n) || (n = c({}, n)), null == r || v(r) || (r = null);
    const o = Sr(),
      s = new WeakSet();
    let a = !1;
    const l = (o.app = {
      _uid: Ir++,
      _component: n,
      _props: r,
      _container: null,
      _context: o,
      _instance: null,
      version: es,
      get config() {
        return o.config;
      },
      set config(e) { },
      use: (e, ...t) => (
        s.has(e) ||
        (e && h(e.install)
          ? (s.add(e), e.install(l, ...t))
          : h(e) && (s.add(e), e(l, ...t))),
        l
      ),
      mixin: (e) => (o.mixins.includes(e) || o.mixins.push(e), l),
      component: (e, t) => (t ? ((o.components[e] = t), l) : o.components[e]),
      directive: (e, t) => (t ? ((o.directives[e] = t), l) : o.directives[e]),
      mount(s, c, i) {
        if (!a) {
          const u = Co(n, r);
          return (
            (u.appContext = o),
            c && t ? t(u, s) : e(u, s, i),
            (a = !0),
            (l._container = s),
            (s.__vue_app__ = l),
            zo(u.component) || u.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide: (e, t) => ((o.provides[e] = t), l),
      runWithContext(e) {
        Ar = l;
        try {
          return e();
        } finally {
          Ar = null;
        }
      },
    });
    return l;
  };
}
let Ar = null;
function Pr(e, t) {
  if (Mo) {
    let n = Mo.provides;
    const r = Mo.parent && Mo.parent.provides;
    r === n && (n = Mo.provides = Object.create(r)), (n[e] = t);
  } else;
}
function xr(e, t, n = !1) {
  const r = Mo || nn;
  if (r || Ar) {
    const o = r
      ? null == r.parent
        ? r.vnode.appContext && r.vnode.appContext.provides
        : r.parent.provides
      : Ar._context.provides;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
  }
}
function Rr(e, n, r, o) {
  const [s, a] = e.propsOptions;
  let l,
    c = !1;
  if (n)
    for (let t in n) {
      if (N(t)) continue;
      const i = n[t];
      let u;
      s && f(s, (u = S(t)))
        ? a && a.includes(u)
          ? ((l || (l = {}))[u] = i)
          : (r[u] = i)
        : tn(e.emitsOptions, t) ||
        (t in o && i === o[t]) ||
        ((o[t] = i), (c = !0));
    }
  if (a) {
    const n = pt(r),
      o = l || t;
    for (let t = 0; t < a.length; t++) {
      const l = a[t];
      r[l] = Fr(s, n, l, o[l], e, !f(o, l));
    }
  }
  return c;
}
function Fr(e, t, n, r, o, s) {
  const a = e[n];
  if (null != a) {
    const e = f(a, "default");
    if (e && void 0 === r) {
      const e = a.default;
      if (a.type !== Function && !a.skipFactory && h(e)) {
        const { propsDefaults: s } = o;
        n in s ? (r = s[n]) : (jo(o), (r = s[n] = e.call(null, t)), Vo());
      } else r = e;
    }
    a[0] &&
      (s && !e ? (r = !1) : !a[1] || ("" !== r && r !== w(n)) || (r = !0));
  }
  return r;
}
function Mr(e, r, o = !1) {
  const s = r.propsCache,
    a = s.get(e);
  if (a) return a;
  const l = e.props,
    i = {},
    u = [];
  let d = !1;
  if (!h(e)) {
    const t = (e) => {
      d = !0;
      const [t, n] = Mr(e, r, !0);
      c(i, t), n && u.push(...n);
    };
    !o && r.mixins.length && r.mixins.forEach(t),
      e.extends && t(e.extends),
      e.mixins && e.mixins.forEach(t);
  }
  if (!l && !d) return v(e) && s.set(e, n), n;
  if (p(l))
    for (let n = 0; n < l.length; n++) {
      const e = S(l[n]);
      Dr(e) && (i[e] = t);
    }
  else if (l)
    for (const t in l) {
      const e = S(t);
      if (Dr(e)) {
        const n = l[t],
          r = (i[e] = p(n) || h(n) ? { type: n } : c({}, n));
        if (r) {
          const t = Wr(Boolean, r.type),
            n = Wr(String, r.type);
          (r[0] = t > -1),
            (r[1] = n < 0 || t < n),
            (t > -1 || f(r, "default")) && u.push(e);
        }
      }
    }
  const m = [i, u];
  return v(e) && s.set(e, m), m;
}
function Dr(e) {
  return "$" !== e[0];
}
function Ur(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : null === e ? "null" : "";
}
function $r(e, t) {
  return Ur(e) === Ur(t);
}
function Wr(e, t) {
  return p(t) ? t.findIndex((t) => $r(t, e)) : h(t) && $r(t, e) ? 0 : -1;
}
const jr = (e) => "_" === e[0] || "$stable" === e,
  Vr = (e) => (p(e) ? e.map(Io) : [Io(e)]),
  Hr = (e, t, n) => {
    if (t._n) return t;
    const r = ln((...e) => Vr(t(...e)), n);
    return (r._c = !1), r;
  },
  Br = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (jr(o)) continue;
      const n = e[o];
      if (h(n)) t[o] = Hr(0, n, r);
      else if (null != n) {
        const e = Vr(n);
        t[o] = () => e;
      }
    }
  },
  Gr = (e, t) => {
    const n = Vr(t);
    e.slots.default = () => n;
  },
  Yr = (e, t) => {
    if (32 & e.vnode.shapeFlag) {
      const n = t._;
      n ? ((e.slots = pt(t)), F(t, "_", n)) : Br(t, (e.slots = {}));
    } else (e.slots = {}), t && Gr(e, t);
    F(e.slots, bo, 1);
  },
  Xr = (e, n, r) => {
    const { vnode: o, slots: s } = e;
    let a = !0,
      l = t;
    if (32 & o.shapeFlag) {
      const e = n._;
      e
        ? r && 1 === e
          ? (a = !1)
          : (c(s, n), r || 1 !== e || delete s._)
        : ((a = !n.$stable), Br(n, s)),
        (l = n);
    } else n && (Gr(e, n), (l = { default: 1 }));
    if (a) for (const t in s) jr(t) || null != l[t] || delete s[t];
  };
function Kr(e, n, r, o, s = !1) {
  if (p(e))
    return void e.forEach((e, t) => Kr(e, n && (p(n) ? n[t] : n), r, o, s));
  if (Wn(o) && !s) return;
  const a = 4 & o.shapeFlag ? zo(o.component) || o.component.proxy : o.el,
    l = s ? null : a,
    { i: c, r: u } = e,
    d = n && n.r,
    m = c.refs === t ? (c.refs = {}) : c.refs,
    g = c.setupState;
  if (
    (null != d &&
      d !== u &&
      (_(d)
        ? ((m[d] = null), f(g, d) && (g[d] = null))
        : vt(d) && (d.value = null)),
      h(u))
  )
    xt(u, c, 12, [l, m]);
  else {
    const t = _(u),
      n = vt(u);
    if (t || n) {
      const o = () => {
        if (e.f) {
          const n = t ? (f(g, u) ? g[u] : m[u]) : u.value;
          s
            ? p(n) && i(n, a)
            : p(n)
              ? n.includes(a) || n.push(a)
              : t
                ? ((m[u] = [a]), f(g, u) && (g[u] = m[u]))
                : ((u.value = [a]), e.k && (m[e.k] = u.value));
        } else
          t
            ? ((m[u] = l), f(g, u) && (g[u] = l))
            : n && ((u.value = l), e.k && (m[e.k] = l));
      };
      l ? ((o.id = -1), zr(o, r)) : o();
    }
  }
}
const zr = function (e, t) {
  var n;
  t && t.pendingBranch
    ? p(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : (p((n = e))
      ? Wt.push(...n)
      : (jt && jt.includes(n, n.allowRecurse ? Vt + 1 : Vt)) || Wt.push(n),
      Xt());
};
function qr(e) {
  return (function (e, o) {
    $().__VUE__ = !0;
    const {
      insert: s,
      remove: a,
      patchProp: l,
      createElement: c,
      createText: i,
      createComment: u,
      setText: p,
      setElementText: d,
      parentNode: m,
      nextSibling: h,
      setScopeId: _ = r,
      insertStaticContent: g,
    } = e,
      v = (
        e,
        t,
        n,
        r = null,
        o = null,
        s = null,
        a = !1,
        l = null,
        c = !!t.dynamicChildren
      ) => {
        if (e === t) return;
        e && !yo(e, t) && ((r = ee(e)), K(e, o, s, !0), (e = null)),
          -2 === t.patchFlag && ((c = !1), (t.dynamicChildren = null));
        const { type: i, ref: u, shapeFlag: f } = t;
        switch (i) {
          case ao:
            b(e, t, n, r);
            break;
          case lo:
            E(e, t, n, r);
            break;
          case co:
            null == e && k(t, n, r, a);
            break;
          case so:
            D(e, t, n, r, o, s, a, l, c);
            break;
          default:
            1 & f
              ? T(e, t, n, r, o, s, a, l, c)
              : 6 & f
                ? U(e, t, n, r, o, s, a, l, c)
                : (64 & f || 128 & f) && i.process(e, t, n, r, o, s, a, l, c, ne);
        }
        null != u && o && Kr(u, e && e.ref, s, t || e, !t);
      },
      b = (e, t, n, r) => {
        if (null == e) s((t.el = i(t.children)), n, r);
        else {
          const n = (t.el = e.el);
          t.children !== e.children && p(n, t.children);
        }
      },
      E = (e, t, n, r) => {
        null == e ? s((t.el = u(t.children || "")), n, r) : (t.el = e.el);
      },
      k = (e, t, n, r) => {
        [e.el, e.anchor] = g(e.children, t, n, r, e.el, e.anchor);
      },
      L = ({ el: e, anchor: t }, n, r) => {
        let o;
        for (; e && e !== t;) (o = h(e)), s(e, n, r), (e = o);
        s(t, n, r);
      },
      C = ({ el: e, anchor: t }) => {
        let n;
        for (; e && e !== t;) (n = h(e)), a(e), (e = n);
        a(t);
      },
      T = (e, t, n, r, o, s, a, l, c) => {
        (a = a || "svg" === t.type),
          null == e ? O(t, n, r, o, s, a, l, c) : P(e, t, o, s, a, l, c);
      },
      O = (e, t, n, r, o, a, i, u) => {
        let f, p;
        const { type: m, props: h, shapeFlag: _, transition: g, dirs: v } = e;
        if (
          ((f = e.el = c(e.type, a, h && h.is, h)),
            8 & _
              ? d(f, e.children)
              : 16 & _ &&
              A(e.children, f, null, r, o, a && "foreignObject" !== m, i, u),
            v && On(e, null, r, "created"),
            I(f, e, e.scopeId, i, r),
            h)
        ) {
          for (const t in h)
            "value" === t ||
              N(t) ||
              l(f, t, null, h[t], a, e.children, r, o, Z);
          "value" in h && l(f, "value", null, h.value),
            (p = h.onVnodeBeforeMount) && xo(p, r, e);
        }
        v && On(e, null, r, "beforeMount");
        const y = (function (e, t) {
          return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
        })(o, g);
        y && g.beforeEnter(f),
          s(f, t, n),
          ((p = h && h.onVnodeMounted) || y || v) &&
          zr(() => {
            p && xo(p, r, e), y && g.enter(f), v && On(e, null, r, "mounted");
          }, o);
      },
      I = (e, t, n, r, o) => {
        if ((n && _(e, n), r)) for (let s = 0; s < r.length; s++) _(e, r[s]);
        if (o) {
          if (t === o.subTree) {
            const t = o.vnode;
            I(e, t, t.scopeId, t.slotScopeIds, o.parent);
          }
        }
      },
      A = (e, t, n, r, o, s, a, l, c = 0) => {
        for (let i = c; i < e.length; i++) {
          const c = (e[i] = l ? wo(e[i]) : Io(e[i]));
          v(null, c, t, n, r, o, s, a, l);
        }
      },
      P = (e, n, r, o, s, a, c) => {
        const i = (n.el = e.el);
        let { patchFlag: u, dynamicChildren: f, dirs: p } = n;
        u |= 16 & e.patchFlag;
        const m = e.props || t,
          h = n.props || t;
        let _;
        r && Jr(r, !1),
          (_ = h.onVnodeBeforeUpdate) && xo(_, r, n, e),
          p && On(n, e, r, "beforeUpdate"),
          r && Jr(r, !0);
        const g = s && "foreignObject" !== n.type;
        if (
          (f
            ? x(e.dynamicChildren, f, i, r, o, g, a)
            : c || B(e, n, i, null, r, o, g, a, !1),
            u > 0)
        ) {
          if (16 & u) M(i, n, m, h, r, o, s);
          else if (
            (2 & u && m.class !== h.class && l(i, "class", null, h.class, s),
              4 & u && l(i, "style", m.style, h.style, s),
              8 & u)
          ) {
            const t = n.dynamicProps;
            for (let n = 0; n < t.length; n++) {
              const a = t[n],
                c = m[a],
                u = h[a];
              (u === c && "value" !== a) ||
                l(i, a, c, u, s, e.children, r, o, Z);
            }
          }
          1 & u && e.children !== n.children && d(i, n.children);
        } else c || null != f || M(i, n, m, h, r, o, s);
        ((_ = h.onVnodeUpdated) || p) &&
          zr(() => {
            _ && xo(_, r, n, e), p && On(n, e, r, "updated");
          }, o);
      },
      x = (e, t, n, r, o, s, a) => {
        for (let l = 0; l < t.length; l++) {
          const c = e[l],
            i = t[l],
            u =
              c.el && (c.type === so || !yo(c, i) || 70 & c.shapeFlag)
                ? m(c.el)
                : n;
          v(c, i, u, null, r, o, s, a, !0);
        }
      },
      M = (e, n, r, o, s, a, c) => {
        if (r !== o) {
          if (r !== t)
            for (const t in r)
              N(t) || t in o || l(e, t, r[t], null, c, n.children, s, a, Z);
          for (const t in o) {
            if (N(t)) continue;
            const i = o[t],
              u = r[t];
            i !== u && "value" !== t && l(e, t, u, i, c, n.children, s, a, Z);
          }
          "value" in o && l(e, "value", r.value, o.value);
        }
      },
      D = (e, t, n, r, o, a, l, c, u) => {
        const f = (t.el = e ? e.el : i("")),
          p = (t.anchor = e ? e.anchor : i(""));
        let { patchFlag: d, dynamicChildren: m, slotScopeIds: h } = t;
        h && (c = c ? c.concat(h) : h),
          null == e
            ? (s(f, n, r), s(p, n, r), A(t.children, n, p, o, a, l, c, u))
            : d > 0 && 64 & d && m && e.dynamicChildren
              ? (x(e.dynamicChildren, m, n, o, a, l, c),
                (null != t.key || (o && t === o.subTree)) && Qr(e, t, !0))
              : B(e, t, n, p, o, a, l, c, u);
      },
      U = (e, t, n, r, o, s, a, l, c) => {
        (t.slotScopeIds = l),
          null == e
            ? 512 & t.shapeFlag
              ? o.ctx.activate(t, n, r, a, c)
              : W(t, n, r, o, s, a, c)
            : j(e, t, c);
      },
      W = (e, n, r, o, s, a, l) => {
        const c = (e.component = (function (e, n, r) {
          const o = e.type,
            s = (n ? n.appContext : e.appContext) || Ro,
            a = {
              uid: Fo++,
              vnode: e,
              type: o,
              parent: n,
              appContext: s,
              root: null,
              next: null,
              subTree: null,
              effect: null,
              update: null,
              scope: new J(!0),
              render: null,
              proxy: null,
              exposed: null,
              exposeProxy: null,
              withProxy: null,
              provides: n ? n.provides : Object.create(s.provides),
              accessCache: null,
              renderCache: [],
              components: null,
              directives: null,
              propsOptions: Mr(o, s),
              emitsOptions: en(o, s),
              emit: null,
              emitted: null,
              propsDefaults: t,
              inheritAttrs: o.inheritAttrs,
              ctx: t,
              data: t,
              props: t,
              attrs: t,
              slots: t,
              refs: t,
              setupState: t,
              setupContext: null,
              attrsProxy: null,
              slotsProxy: null,
              suspense: r,
              suspenseId: r ? r.pendingId : 0,
              asyncDep: null,
              asyncResolved: !1,
              isMounted: !1,
              isUnmounted: !1,
              isDeactivated: !1,
              bc: null,
              c: null,
              bm: null,
              m: null,
              bu: null,
              u: null,
              um: null,
              bum: null,
              da: null,
              a: null,
              rtg: null,
              rtc: null,
              ec: null,
              sp: null,
            };
          (a.ctx = { _: a }),
            (a.root = n ? n.root : a),
            (a.emit = Zt.bind(null, a)),
            e.ce && e.ce(a);
          return a;
        })(e, o, s));
        if (
          (jn(e) && (c.ctx.renderer = ne),
            (function (e, t = !1) {
              Go = t;
              const { props: n, children: r } = e.vnode,
                o = Ho(e);
              (function (e, t, n, r = !1) {
                const o = {},
                  s = {};
                F(s, bo, 1),
                  (e.propsDefaults = Object.create(null)),
                  Rr(e, t, o, s);
                for (const a in e.propsOptions[0]) a in o || (o[a] = void 0);
                n
                  ? (e.props = r ? o : st(o))
                  : e.type.props
                    ? (e.props = o)
                    : (e.props = s),
                  (e.attrs = s);
              })(e, n, o, t),
                Yr(e, r);
              const s = o
                ? (function (e, t) {
                  const n = e.type;
                  (e.accessCache = Object.create(null)),
                    (e.proxy = dt(new Proxy(e.ctx, fr)));
                  const { setup: r } = n;
                  if (r) {
                    const n = (e.setupContext = r.length > 1 ? Ko(e) : null);
                    jo(e), he();
                    const o = xt(r, e, 0, [e.props, n]);
                    if ((_e(), Vo(), y(o))) {
                      if ((o.then(Vo, Vo), t))
                        return o
                          .then((n) => {
                            Yo(e, n, t);
                          })
                          .catch((t) => {
                            Ft(t, e, 0);
                          });
                      e.asyncDep = o;
                    } else Yo(e, o, t);
                  } else Xo(e, t);
                })(e, t)
                : void 0;
              Go = !1;
            })(c),
            c.asyncDep)
        ) {
          if ((s && s.registerDep(c, V), !e.el)) {
            const e = (c.subTree = Co(lo));
            E(null, e, n, r);
          }
        } else V(c, e, n, r, s, a, l);
      },
      j = (e, t, n) => {
        const r = (t.component = e.component);
        if (
          (function (e, t, n) {
            const { props: r, children: o, component: s } = e,
              { props: a, children: l, patchFlag: c } = t,
              i = s.emitsOptions;
            if (t.dirs || t.transition) return !0;
            if (!(n && c >= 0))
              return (
                !((!o && !l) || (l && l.$stable)) ||
                (r !== a && (r ? !a || pn(r, a, i) : !!a))
              );
            if (1024 & c) return !0;
            if (16 & c) return r ? pn(r, a, i) : !!a;
            if (8 & c) {
              const e = t.dynamicProps;
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                if (a[n] !== r[n] && !tn(i, n)) return !0;
              }
            }
            return !1;
          })(e, t, n)
        ) {
          if (r.asyncDep && !r.asyncResolved) return void H(r, t, n);
          (r.next = t),
            (function (e) {
              const t = Ut.indexOf(e);
              t > $t && Ut.splice(t, 1);
            })(r.update),
            r.update();
        } else (t.el = e.el), (r.vnode = t);
      },
      V = (e, t, n, r, o, s, a) => {
        const l = () => {
          if (e.isMounted) {
            let t,
              { next: n, bu: r, u: l, parent: c, vnode: i } = e,
              u = n;
            Jr(e, !1),
              n ? ((n.el = i.el), H(e, n, a)) : (n = i),
              r && R(r),
              (t = n.props && n.props.onVnodeBeforeUpdate) && xo(t, c, n, i),
              Jr(e, !0);
            const f = cn(e),
              p = e.subTree;
            (e.subTree = f),
              v(p, f, m(p.el), ee(p), e, o, s),
              (n.el = f.el),
              null === u &&
              (function ({ vnode: e, parent: t }, n) {
                for (; t && t.subTree === e;)
                  ((e = t.vnode).el = n), (t = t.parent);
              })(e, f.el),
              l && zr(l, o),
              (t = n.props && n.props.onVnodeUpdated) &&
              zr(() => xo(t, c, n, i), o);
          } else {
            let a;
            const { el: l, props: c } = t,
              { bm: i, m: u, parent: f } = e,
              p = Wn(t);
            if (
              (Jr(e, !1),
                i && R(i),
                !p && (a = c && c.onVnodeBeforeMount) && xo(a, f, t),
                Jr(e, !0),
                l && oe)
            ) {
              const n = () => {
                (e.subTree = cn(e)), oe(l, e.subTree, e, o, null);
              };
              p
                ? t.type.__asyncLoader().then(() => !e.isUnmounted && n())
                : n();
            } else {
              const a = (e.subTree = cn(e));
              v(null, a, n, r, e, o, s), (t.el = a.el);
            }
            if ((u && zr(u, o), !p && (a = c && c.onVnodeMounted))) {
              const e = t;
              zr(() => xo(a, f, e), o);
            }
            (256 & t.shapeFlag ||
              (f && Wn(f.vnode) && 256 & f.vnode.shapeFlag)) &&
              e.a &&
              zr(e.a, o),
              (e.isMounted = !0),
              (t = n = r = null);
          }
        },
          c = (e.effect = new fe(l, () => Yt(i), e.scope)),
          i = (e.update = () => c.run());
        (i.id = e.uid), Jr(e, !0), i();
      },
      H = (e, t, n) => {
        t.component = e;
        const r = e.vnode.props;
        (e.vnode = t),
          (e.next = null),
          (function (e, t, n, r) {
            const {
              props: o,
              attrs: s,
              vnode: { patchFlag: a },
            } = e,
              l = pt(o),
              [c] = e.propsOptions;
            let i = !1;
            if (!(r || a > 0) || 16 & a) {
              let r;
              Rr(e, t, o, s) && (i = !0);
              for (const s in l)
                (t && (f(t, s) || ((r = w(s)) !== s && f(t, r)))) ||
                  (c
                    ? !n ||
                    (void 0 === n[s] && void 0 === n[r]) ||
                    (o[s] = Fr(c, l, s, void 0, e, !0))
                    : delete o[s]);
              if (s !== l)
                for (const e in s) (t && f(t, e)) || (delete s[e], (i = !0));
            } else if (8 & a) {
              const n = e.vnode.dynamicProps;
              for (let r = 0; r < n.length; r++) {
                let a = n[r];
                if (tn(e.emitsOptions, a)) continue;
                const u = t[a];
                if (c)
                  if (f(s, a)) u !== s[a] && ((s[a] = u), (i = !0));
                  else {
                    const t = S(a);
                    o[t] = Fr(c, l, t, u, e, !1);
                  }
                else u !== s[a] && ((s[a] = u), (i = !0));
              }
            }
            i && ye(e, "set", "$attrs");
          })(e, t.props, r, n),
          Xr(e, t.children, n),
          he(),
          Kt(),
          _e();
      },
      B = (e, t, n, r, o, s, a, l, c = !1) => {
        const i = e && e.children,
          u = e ? e.shapeFlag : 0,
          f = t.children,
          { patchFlag: p, shapeFlag: m } = t;
        if (p > 0) {
          if (128 & p) return void Y(i, f, n, r, o, s, a, l, c);
          if (256 & p) return void G(i, f, n, r, o, s, a, l, c);
        }
        8 & m
          ? (16 & u && Z(i, o, s), f !== i && d(n, f))
          : 16 & u
            ? 16 & m
              ? Y(i, f, n, r, o, s, a, l, c)
              : Z(i, o, s, !0)
            : (8 & u && d(n, ""), 16 & m && A(f, n, r, o, s, a, l, c));
      },
      G = (e, t, r, o, s, a, l, c, i) => {
        t = t || n;
        const u = (e = e || n).length,
          f = t.length,
          p = Math.min(u, f);
        let d;
        for (d = 0; d < p; d++) {
          const n = (t[d] = i ? wo(t[d]) : Io(t[d]));
          v(e[d], n, r, null, s, a, l, c, i);
        }
        u > f ? Z(e, s, a, !0, !1, p) : A(t, r, o, s, a, l, c, i, p);
      },
      Y = (e, t, r, o, s, a, l, c, i) => {
        let u = 0;
        const f = t.length;
        let p = e.length - 1,
          d = f - 1;
        for (; u <= p && u <= d;) {
          const n = e[u],
            o = (t[u] = i ? wo(t[u]) : Io(t[u]));
          if (!yo(n, o)) break;
          v(n, o, r, null, s, a, l, c, i), u++;
        }
        for (; u <= p && u <= d;) {
          const n = e[p],
            o = (t[d] = i ? wo(t[d]) : Io(t[d]));
          if (!yo(n, o)) break;
          v(n, o, r, null, s, a, l, c, i), p--, d--;
        }
        if (u > p) {
          if (u <= d) {
            const e = d + 1,
              n = e < f ? t[e].el : o;
            for (; u <= d;)
              v(null, (t[u] = i ? wo(t[u]) : Io(t[u])), r, n, s, a, l, c, i),
                u++;
          }
        } else if (u > d) for (; u <= p;) K(e[u], s, a, !0), u++;
        else {
          const m = u,
            h = u,
            _ = new Map();
          for (u = h; u <= d; u++) {
            const e = (t[u] = i ? wo(t[u]) : Io(t[u]));
            null != e.key && _.set(e.key, u);
          }
          let g,
            y = 0;
          const b = d - h + 1;
          let E = !1,
            k = 0;
          const L = new Array(b);
          for (u = 0; u < b; u++) L[u] = 0;
          for (u = m; u <= p; u++) {
            const n = e[u];
            if (y >= b) {
              K(n, s, a, !0);
              continue;
            }
            let o;
            if (null != n.key) o = _.get(n.key);
            else
              for (g = h; g <= d; g++)
                if (0 === L[g - h] && yo(n, t[g])) {
                  o = g;
                  break;
                }
            void 0 === o
              ? K(n, s, a, !0)
              : ((L[o - h] = u + 1),
                o >= k ? (k = o) : (E = !0),
                v(n, t[o], r, null, s, a, l, c, i),
                y++);
          }
          const C = E
            ? (function (e) {
              const t = e.slice(),
                n = [0];
              let r, o, s, a, l;
              const c = e.length;
              for (r = 0; r < c; r++) {
                const c = e[r];
                if (0 !== c) {
                  if (((o = n[n.length - 1]), e[o] < c)) {
                    (t[r] = o), n.push(r);
                    continue;
                  }
                  for (s = 0, a = n.length - 1; s < a;)
                    (l = (s + a) >> 1), e[n[l]] < c ? (s = l + 1) : (a = l);
                  c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), (n[s] = r));
                }
              }
              (s = n.length), (a = n[s - 1]);
              for (; s-- > 0;) (n[s] = a), (a = t[a]);
              return n;
            })(L)
            : n;
          for (g = C.length - 1, u = b - 1; u >= 0; u--) {
            const e = h + u,
              n = t[e],
              p = e + 1 < f ? t[e + 1].el : o;
            0 === L[u]
              ? v(null, n, r, p, s, a, l, c, i)
              : E && (g < 0 || u !== C[g] ? X(n, r, p, 2) : g--);
          }
        }
      },
      X = (e, t, n, r, o = null) => {
        const { el: a, type: l, transition: c, children: i, shapeFlag: u } = e;
        if (6 & u) return void X(e.component.subTree, t, n, r);
        if (128 & u) return void e.suspense.move(t, n, r);
        if (64 & u) return void l.move(e, t, n, ne);
        if (l === so) {
          s(a, t, n);
          for (let e = 0; e < i.length; e++) X(i[e], t, n, r);
          return void s(e.anchor, t, n);
        }
        if (l === co) return void L(e, t, n);
        if (2 !== r && 1 & u && c)
          if (0 === r) c.beforeEnter(a), s(a, t, n), zr(() => c.enter(a), o);
          else {
            const { leave: e, delayLeave: r, afterLeave: o } = c,
              l = () => s(a, t, n),
              i = () => {
                e(a, () => {
                  l(), o && o();
                });
              };
            r ? r(a, l, i) : i();
          }
        else s(a, t, n);
      },
      K = (e, t, n, r = !1, o = !1) => {
        const {
          type: s,
          props: a,
          ref: l,
          children: c,
          dynamicChildren: i,
          shapeFlag: u,
          patchFlag: f,
          dirs: p,
        } = e;
        if ((null != l && Kr(l, null, n, e, !0), 256 & u))
          return void t.ctx.deactivate(e);
        const d = 1 & u && p,
          m = !Wn(e);
        let h;
        if ((m && (h = a && a.onVnodeBeforeUnmount) && xo(h, t, e), 6 & u))
          Q(e.component, n, r);
        else {
          if (128 & u) return void e.suspense.unmount(n, r);
          d && On(e, null, t, "beforeUnmount"),
            64 & u
              ? e.type.remove(e, t, n, o, ne, r)
              : i && (s !== so || (f > 0 && 64 & f))
                ? Z(i, t, n, !1, !0)
                : ((s === so && 384 & f) || (!o && 16 & u)) && Z(c, t, n),
            r && z(e);
        }
        ((m && (h = a && a.onVnodeUnmounted)) || d) &&
          zr(() => {
            h && xo(h, t, e), d && On(e, null, t, "unmounted");
          }, n);
      },
      z = (e) => {
        const { type: t, el: n, anchor: r, transition: o } = e;
        if (t === so) return void q(n, r);
        if (t === co) return void C(e);
        const s = () => {
          a(n), o && !o.persisted && o.afterLeave && o.afterLeave();
        };
        if (1 & e.shapeFlag && o && !o.persisted) {
          const { leave: t, delayLeave: r } = o,
            a = () => t(n, s);
          r ? r(e.el, s, a) : a();
        } else s();
      },
      q = (e, t) => {
        let n;
        for (; e !== t;) (n = h(e)), a(e), (e = n);
        a(t);
      },
      Q = (e, t, n) => {
        const { bum: r, scope: o, update: s, subTree: a, um: l } = e;
        r && R(r),
          o.stop(),
          s && ((s.active = !1), K(a, e, t, n)),
          l && zr(l, t),
          zr(() => {
            e.isUnmounted = !0;
          }, t),
          t &&
          t.pendingBranch &&
          !t.isUnmounted &&
          e.asyncDep &&
          !e.asyncResolved &&
          e.suspenseId === t.pendingId &&
          (t.deps--, 0 === t.deps && t.resolve());
      },
      Z = (e, t, n, r = !1, o = !1, s = 0) => {
        for (let a = s; a < e.length; a++) K(e[a], t, n, r, o);
      },
      ee = (e) =>
        6 & e.shapeFlag
          ? ee(e.component.subTree)
          : 128 & e.shapeFlag
            ? e.suspense.next()
            : h(e.anchor || e.el),
      te = (e, t, n) => {
        null == e
          ? t._vnode && K(t._vnode, null, null, !0)
          : v(t._vnode || null, e, t, null, null, null, n),
          Kt(),
          zt(),
          (t._vnode = e);
      },
      ne = {
        p: v,
        um: K,
        m: X,
        r: z,
        mt: W,
        mc: A,
        pc: B,
        pbc: x,
        n: ee,
        o: e,
      };
    let re, oe;
    o && ([re, oe] = o(ne));
    return { render: te, hydrate: re, createApp: wr(te, re) };
  })(e);
}
function Jr({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Qr(e, t, n = !1) {
  const r = e.children,
    o = t.children;
  if (p(r) && p(o))
    for (let s = 0; s < r.length; s++) {
      const e = r[s];
      let t = o[s];
      1 & t.shapeFlag &&
        !t.dynamicChildren &&
        ((t.patchFlag <= 0 || 32 === t.patchFlag) &&
          ((t = o[s] = wo(o[s])), (t.el = e.el)),
          n || Qr(e, t)),
        t.type === ao && (t.el = e.el);
    }
}
const Zr = (e) => e && (e.disabled || "" === e.disabled),
  eo = (e) => "undefined" != typeof SVGElement && e instanceof SVGElement,
  to = (e, t) => {
    const n = e && e.to;
    if (_(n)) {
      if (t) {
        return t(n);
      }
      return null;
    }
    return n;
  };
function no(e, t, n, { o: { insert: r }, m: o }, s = 2) {
  0 === s && r(e.targetAnchor, t, n);
  const { el: a, anchor: l, shapeFlag: c, children: i, props: u } = e,
    f = 2 === s;
  if ((f && r(a, t, n), (!f || Zr(u)) && 16 & c))
    for (let p = 0; p < i.length; p++) o(i[p], t, n, 2);
  f && r(l, t, n);
}
const ro = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, r, o, s, a, l, c, i) {
    const {
      mc: u,
      pc: f,
      pbc: p,
      o: { insert: d, querySelector: m, createText: h, createComment: _ },
    } = i,
      g = Zr(t.props);
    let { shapeFlag: v, children: y, dynamicChildren: b } = t;
    if (null == e) {
      const e = (t.el = h("")),
        i = (t.anchor = h(""));
      d(e, n, r), d(i, n, r);
      const f = (t.target = to(t.props, m)),
        p = (t.targetAnchor = h(""));
      f && (d(p, f), (a = a || eo(f)));
      const _ = (e, t) => {
        16 & v && u(y, e, t, o, s, a, l, c);
      };
      g ? _(n, i) : f && _(f, p);
    } else {
      t.el = e.el;
      const r = (t.anchor = e.anchor),
        u = (t.target = e.target),
        d = (t.targetAnchor = e.targetAnchor),
        h = Zr(e.props),
        _ = h ? n : u,
        v = h ? r : d;
      if (
        ((a = a || eo(u)),
          b
            ? (p(e.dynamicChildren, b, _, o, s, a, l), Qr(e, t, !0))
            : c || f(e, t, _, v, o, s, a, l, !1),
          g)
      )
        h
          ? t.props &&
          e.props &&
          t.props.to !== e.props.to &&
          (t.props.to = e.props.to)
          : no(t, n, r, i, 1);
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const e = (t.target = to(t.props, m));
        e && no(t, e, null, i, 0);
      } else h && no(t, u, d, i, 1);
    }
    oo(t);
  },
  remove(e, t, n, r, { um: o, o: { remove: s } }, a) {
    const {
      shapeFlag: l,
      children: c,
      anchor: i,
      targetAnchor: u,
      target: f,
      props: p,
    } = e;
    if ((f && s(u), a && s(i), 16 & l)) {
      const e = a || !Zr(p);
      for (let r = 0; r < c.length; r++) {
        const s = c[r];
        o(s, t, n, e, !!s.dynamicChildren);
      }
    }
  },
  move: no,
  hydrate: function (
    e,
    t,
    n,
    r,
    o,
    s,
    { o: { nextSibling: a, parentNode: l, querySelector: c } },
    i
  ) {
    const u = (t.target = to(t.props, c));
    if (u) {
      const c = u._lpa || u.firstChild;
      if (16 & t.shapeFlag)
        if (Zr(t.props))
          (t.anchor = i(a(e), t, l(e), n, r, o, s)), (t.targetAnchor = c);
        else {
          t.anchor = a(e);
          let l = c;
          for (; l;)
            if (
              ((l = a(l)),
                l && 8 === l.nodeType && "teleport anchor" === l.data)
            ) {
              (t.targetAnchor = l),
                (u._lpa = t.targetAnchor && a(t.targetAnchor));
              break;
            }
          i(c, t, u, n, r, o, s);
        }
      oo(t);
    }
    return t.anchor && a(t.anchor);
  },
};
function oo(e) {
  const t = e.ctx;
  if (t && t.ut) {
    let n = e.children[0].el;
    for (; n && n !== e.targetAnchor;)
      1 === n.nodeType && n.setAttribute("data-v-owner", t.uid),
        (n = n.nextSibling);
    t.ut();
  }
}
const so = Symbol.for("v-fgt"),
  ao = Symbol.for("v-txt"),
  lo = Symbol.for("v-cmt"),
  co = Symbol.for("v-stc"),
  io = [];
let uo = null;
function fo(e = !1) {
  io.push((uo = e ? null : []));
}
let po = 1;
function mo(e) {
  po += e;
}
function ho(e) {
  return (
    (e.dynamicChildren = po > 0 ? uo || n : null),
    io.pop(),
    (uo = io[io.length - 1] || null),
    po > 0 && uo && uo.push(e),
    e
  );
}
function _o(e, t, n, r, o, s) {
  return ho(Lo(e, t, n, r, o, s, !0));
}
function go(e, t, n, r, o) {
  return ho(Co(e, t, n, r, o, !0));
}
function vo(e) {
  return !!e && !0 === e.__v_isVNode;
}
function yo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const bo = "__vInternal",
  Eo = ({ key: e }) => (null != e ? e : null),
  ko = ({ ref: e, ref_key: t, ref_for: n }) => (
    "number" == typeof e && (e = "" + e),
    null != e
      ? _(e) || vt(e) || h(e)
        ? { i: nn, r: e, k: t, f: !!n }
        : e
      : null
  );
function Lo(
  e,
  t = null,
  n = null,
  r = 0,
  o = null,
  s = e === so ? 0 : 1,
  a = !1,
  l = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Eo(t),
    ref: t && ko(t),
    scopeId: rn,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: nn,
  };
  return (
    l
      ? (Ao(c, n), 128 & s && e.normalize(c))
      : n && (c.shapeFlag |= _(n) ? 8 : 16),
    po > 0 &&
    !a &&
    uo &&
    (c.patchFlag > 0 || 6 & s) &&
    32 !== c.patchFlag &&
    uo.push(c),
    c
  );
}
const Co = function (e, t = null, n = null, r = 0, o = null, s = !1) {
  (e && e !== hn) || (e = lo);
  if (vo(e)) {
    const r = No(e, t, !0);
    return (
      n && Ao(r, n),
      po > 0 &&
      !s &&
      uo &&
      (6 & r.shapeFlag ? (uo[uo.indexOf(e)] = r) : uo.push(r)),
      (r.patchFlag |= -2),
      r
    );
  }
  (a = e), h(a) && "__vccOpts" in a && (e = e.__vccOpts);
  var a;
  if (t) {
    t = (function (e) {
      return e ? (ft(e) || bo in e ? c({}, e) : e) : null;
    })(t);
    let { class: e, style: n } = t;
    e && !_(e) && (t.class = G(e)),
      v(n) && (ft(n) && !p(n) && (n = c({}, n)), (t.style = W(n)));
  }
  const l = _(e)
    ? 1
    : ((e) => e.__isSuspense)(e)
      ? 128
      : ((e) => e.__isTeleport)(e)
        ? 64
        : v(e)
          ? 4
          : h(e)
            ? 2
            : 0;
  return Lo(e, t, n, r, o, l, s, !0);
};
function No(e, t, n = !1) {
  const { props: r, ref: o, patchFlag: s, children: a } = e,
    l = t ? Po(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Eo(l),
    ref:
      t && t.ref ? (n && o ? (p(o) ? o.concat(ko(t)) : [o, ko(t)]) : ko(t)) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== so ? (-1 === s ? 16 : 16 | s) : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && No(e.ssContent),
    ssFallback: e.ssFallback && No(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function To(e = " ", t = 0) {
  return Co(ao, null, e, t);
}
function Oo(e, t) {
  const n = Co(co, null, e);
  return (n.staticCount = t), n;
}
function So(e = "", t = !1) {
  return t ? (fo(), go(lo, null, e)) : Co(lo, null, e);
}
function Io(e) {
  return null == e || "boolean" == typeof e
    ? Co(lo)
    : p(e)
      ? Co(so, null, e.slice())
      : "object" == typeof e
        ? wo(e)
        : Co(ao, null, String(e));
}
function wo(e) {
  return (null === e.el && -1 !== e.patchFlag) || e.memo ? e : No(e);
}
function Ao(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (null == t) t = null;
  else if (p(t)) n = 16;
  else if ("object" == typeof t) {
    if (65 & r) {
      const n = t.default;
      return void (n && (n._c && (n._d = !1), Ao(e, n()), n._c && (n._d = !0)));
    }
    {
      n = 32;
      const r = t._;
      r || bo in t
        ? 3 === r &&
        nn &&
        (1 === nn.slots._ ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
        : (t._ctx = nn);
    }
  } else
    h(t)
      ? ((t = { default: t, _ctx: nn }), (n = 32))
      : ((t = String(t)), 64 & r ? ((n = 16), (t = [To(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function Po(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const e in r)
      if ("class" === e)
        t.class !== r.class && (t.class = G([t.class, r.class]));
      else if ("style" === e) t.style = W([t.style, r.style]);
      else if (a(e)) {
        const n = t[e],
          o = r[e];
        !o ||
          n === o ||
          (p(n) && n.includes(o)) ||
          (t[e] = n ? [].concat(n, o) : o);
      } else "" !== e && (t[e] = r[e]);
  }
  return t;
}
function xo(e, t, n, r = null) {
  Rt(e, t, 7, [n, r]);
}
const Ro = Sr();
let Fo = 0;
let Mo = null;
const Do = () => Mo || nn;
let Uo,
  $o,
  Wo = "__VUE_INSTANCE_SETTERS__";
($o = $()[Wo]) || ($o = $()[Wo] = []),
  $o.push((e) => (Mo = e)),
  (Uo = (e) => {
    $o.length > 1 ? $o.forEach((t) => t(e)) : $o[0](e);
  });
const jo = (e) => {
  Uo(e), e.scope.on();
},
  Vo = () => {
    Mo && Mo.scope.off(), Uo(null);
  };
function Ho(e) {
  return 4 & e.vnode.shapeFlag;
}
let Bo,
  Go = !1;
function Yo(e, t, n) {
  h(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : v(t) && (e.setupState = Nt(t)),
    Xo(e, n);
}
function Xo(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Bo && !o.render) {
      const t = o.template || br(e).template;
      if (t) {
        const { isCustomElement: n, compilerOptions: r } = e.appContext.config,
          { delimiters: s, compilerOptions: a } = o,
          l = c(c({ isCustomElement: n, delimiters: s }, r), a);
        o.render = Bo(t, l);
      }
    }
    e.render = o.render || r;
  }
  jo(e), he();
  try {
    gr(e);
  } finally {
    _e(), Vo();
  }
}
function Ko(e) {
  const t = (t) => {
    e.exposed = t || {};
  };
  return {
    get attrs() {
      return (function (e) {
        return (
          e.attrsProxy ||
          (e.attrsProxy = new Proxy(e.attrs, {
            get: (t, n) => (ge(e, 0, "$attrs"), t[n]),
          }))
        );
      })(e);
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function zo(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Nt(dt(e.exposed)), {
        get: (t, n) => (n in t ? t[n] : n in ir ? ir[n](e) : void 0),
        has: (e, t) => t in e || t in ir,
      }))
    );
}
const qo = (e, t) => At(e, 0, Go);
function Jo(e, t, n) {
  const r = arguments.length;
  return 2 === r
    ? v(t) && !p(t)
      ? vo(t)
        ? Co(e, null, [t])
        : Co(e, t)
      : Co(e, null, t)
    : (r > 3
      ? (n = Array.prototype.slice.call(arguments, 2))
      : 3 === r && vo(n) && (n = [n]),
      Co(e, t, n));
}
const Qo = Symbol.for("v-scx"),
  Zo = () => xr(Qo),
  es = "3.3.9",
  ts = "undefined" != typeof document ? document : null,
  ns = ts && ts.createElement("template"),
  rs = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t
        ? ts.createElementNS("http://www.w3.org/2000/svg", e)
        : ts.createElement(e, n ? { is: n } : void 0);
      return (
        "select" === e &&
        r &&
        null != r.multiple &&
        o.setAttribute("multiple", r.multiple),
        o
      );
    },
    createText: (e) => ts.createTextNode(e),
    createComment: (e) => ts.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => ts.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const a = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), n), o !== s && (o = o.nextSibling);

        );
      else {
        ns.innerHTML = r ? `<svg>${e}</svg>` : e;
        const o = ns.content;
        if (r) {
          const e = o.firstChild;
          for (; e.firstChild;) o.appendChild(e.firstChild);
          o.removeChild(e);
        }
        t.insertBefore(o, n);
      }
      return [
        a ? a.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  },
  os = "transition",
  ss = "animation",
  as = Symbol("_vtc"),
  ls = (e, { slots: t }) =>
    Jo(
      Pn,
      (function (e) {
        const t = {};
        for (const c in e) c in cs || (t[c] = e[c]);
        if (!1 === e.css) return t;
        const {
          name: n = "v",
          type: r,
          duration: o,
          enterFromClass: s = `${n}-enter-from`,
          enterActiveClass: a = `${n}-enter-active`,
          enterToClass: l = `${n}-enter-to`,
          appearFromClass: i = s,
          appearActiveClass: u = a,
          appearToClass: f = l,
          leaveFromClass: p = `${n}-leave-from`,
          leaveActiveClass: d = `${n}-leave-active`,
          leaveToClass: m = `${n}-leave-to`,
        } = e,
          h = (function (e) {
            if (null == e) return null;
            if (v(e)) return [fs(e.enter), fs(e.leave)];
            {
              const t = fs(e);
              return [t, t];
            }
          })(o),
          _ = h && h[0],
          g = h && h[1],
          {
            onBeforeEnter: y,
            onEnter: b,
            onEnterCancelled: E,
            onLeave: k,
            onLeaveCancelled: L,
            onBeforeAppear: C = y,
            onAppear: N = b,
            onAppearCancelled: T = E,
          } = t,
          O = (e, t, n) => {
            ds(e, t ? f : l), ds(e, t ? u : a), n && n();
          },
          S = (e, t) => {
            (e._isLeaving = !1), ds(e, p), ds(e, m), ds(e, d), t && t();
          },
          I = (e) => (t, n) => {
            const o = e ? N : b,
              a = () => O(t, e, n);
            is(o, [t, a]),
              ms(() => {
                ds(t, e ? i : s), ps(t, e ? f : l), us(o) || _s(t, r, _, a);
              });
          };
        return c(t, {
          onBeforeEnter(e) {
            is(y, [e]), ps(e, s), ps(e, a);
          },
          onBeforeAppear(e) {
            is(C, [e]), ps(e, i), ps(e, u);
          },
          onEnter: I(!1),
          onAppear: I(!0),
          onLeave(e, t) {
            e._isLeaving = !0;
            const n = () => S(e, t);
            ps(e, p),
              document.body.offsetHeight,
              ps(e, d),
              ms(() => {
                e._isLeaving && (ds(e, p), ps(e, m), us(k) || _s(e, r, g, n));
              }),
              is(k, [e, n]);
          },
          onEnterCancelled(e) {
            O(e, !1), is(E, [e]);
          },
          onAppearCancelled(e) {
            O(e, !0), is(T, [e]);
          },
          onLeaveCancelled(e) {
            S(e), is(L, [e]);
          },
        });
      })(e),
      t
    );
ls.displayName = "Transition";
const cs = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
ls.props = c({}, An, cs);
const is = (e, t = []) => {
  p(e) ? e.forEach((e) => e(...t)) : e && e(...t);
},
  us = (e) => !!e && (p(e) ? e.some((e) => e.length > 1) : e.length > 1);
function fs(e) {
  return D(e);
}
function ps(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.add(t)),
    (e[as] || (e[as] = new Set())).add(t);
}
function ds(e, t) {
  t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
  const n = e[as];
  n && (n.delete(t), n.size || (e[as] = void 0));
}
function ms(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let hs = 0;
function _s(e, t, n, r) {
  const o = (e._endId = ++hs),
    s = () => {
      o === e._endId && r();
    };
  if (n) return setTimeout(s, n);
  const {
    type: a,
    timeout: l,
    propCount: c,
  } = (function (e, t) {
    const n = window.getComputedStyle(e),
      r = (e) => (n[e] || "").split(", "),
      o = r(`${os}Delay`),
      s = r(`${os}Duration`),
      a = gs(o, s),
      l = r(`${ss}Delay`),
      c = r(`${ss}Duration`),
      i = gs(l, c);
    let u = null,
      f = 0,
      p = 0;
    t === os
      ? a > 0 && ((u = os), (f = a), (p = s.length))
      : t === ss
        ? i > 0 && ((u = ss), (f = i), (p = c.length))
        : ((f = Math.max(a, i)),
          (u = f > 0 ? (a > i ? os : ss) : null),
          (p = u ? (u === os ? s.length : c.length) : 0));
    const d =
      u === os && /\b(transform|all)(,|$)/.test(r(`${os}Property`).toString());
    return { type: u, timeout: f, propCount: p, hasTransform: d };
  })(e, t);
  if (!a) return r();
  const i = a + "end";
  let u = 0;
  const f = () => {
    e.removeEventListener(i, p), s();
  },
    p = (t) => {
      t.target === e && ++u >= c && f();
    };
  setTimeout(() => {
    u < c && f();
  }, l + 1),
    e.addEventListener(i, p);
}
function gs(e, t) {
  for (; e.length < t.length;) e = e.concat(e);
  return Math.max(...t.map((t, n) => vs(t) + vs(e[n])));
}
function vs(e) {
  return "auto" === e ? 0 : 1e3 * Number(e.slice(0, -1).replace(",", "."));
}
const ys = Symbol("_vod"),
  bs = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e[ys] = "none" === e.style.display ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : Es(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n &&
        (r
          ? t
            ? (r.beforeEnter(e), Es(e, !0), r.enter(e))
            : r.leave(e, () => {
              Es(e, !1);
            })
          : Es(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Es(e, t);
    },
  };
function Es(e, t) {
  e.style.display = t ? e[ys] : "none";
}
const ks = /\s*!important$/;
function Ls(e, t, n) {
  if (p(n)) n.forEach((n) => Ls(e, t, n));
  else if ((null == n && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const r = (function (e, t) {
      const n = Ns[t];
      if (n) return n;
      let r = S(t);
      if ("filter" !== r && r in e) return (Ns[t] = r);
      r = A(r);
      for (let o = 0; o < Cs.length; o++) {
        const n = Cs[o] + r;
        if (n in e) return (Ns[t] = n);
      }
      return t;
    })(e, t);
    ks.test(n)
      ? e.setProperty(w(r), n.replace(ks, ""), "important")
      : (e[r] = n);
  }
}
const Cs = ["Webkit", "Moz", "ms"],
  Ns = {};
const Ts = "http://www.w3.org/1999/xlink";
const Os = Symbol("_vei");
function Ss(e, t, n, r, o = null) {
  const s = e[Os] || (e[Os] = {}),
    a = s[t];
  if (r && a) a.value = r;
  else {
    const [n, l] = (function (e) {
      let t;
      if (Is.test(e)) {
        let n;
        for (t = {}; (n = e.match(Is));)
          (e = e.slice(0, e.length - n[0].length)),
            (t[n[0].toLowerCase()] = !0);
      }
      const n = ":" === e[2] ? e.slice(3) : w(e.slice(2));
      return [n, t];
    })(t);
    if (r) {
      const a = (s[t] = (function (e, t) {
        const n = (e) => {
          if (e._vts) {
            if (e._vts <= n.attached) return;
          } else e._vts = Date.now();
          Rt(
            (function (e, t) {
              if (p(t)) {
                const n = e.stopImmediatePropagation;
                return (
                  (e.stopImmediatePropagation = () => {
                    n.call(e), (e._stopped = !0);
                  }),
                  t.map((e) => (t) => !t._stopped && e && e(t))
                );
              }
              return t;
            })(e, n.value),
            t,
            5,
            [e]
          );
        };
        return (n.value = e), (n.attached = Ps()), n;
      })(r, o));
      !(function (e, t, n, r) {
        e.addEventListener(t, n, r);
      })(e, n, a, l);
    } else
      a &&
        (!(function (e, t, n, r) {
          e.removeEventListener(t, n, r);
        })(e, n, a, l),
          (s[t] = void 0));
  }
}
const Is = /(?:Once|Passive|Capture)$/;
let ws = 0;
const As = Promise.resolve(),
  Ps = () => ws || (As.then(() => (ws = 0)), (ws = Date.now()));
const xs = /^on[a-z]/;
const Rs = ["ctrl", "shift", "alt", "meta"],
  Fs = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && 0 !== e.button,
    middle: (e) => "button" in e && 1 !== e.button,
    right: (e) => "button" in e && 2 !== e.button,
    exact: (e, t) => Rs.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Ms =
    (e, t) =>
      (n, ...r) => {
        for (let e = 0; e < t.length; e++) {
          const r = Fs[t[e]];
          if (r && r(n, t)) return;
        }
        return e(n, ...r);
      },
  Ds = c(
    {
      patchProp: (e, t, n, r, o = !1, s, c, i, u) => {
        "class" === t
          ? (function (e, t, n) {
            const r = e[as];
            r && (t = (t ? [t, ...r] : [...r]).join(" ")),
              null == t
                ? e.removeAttribute("class")
                : n
                  ? e.setAttribute("class", t)
                  : (e.className = t);
          })(e, r, o)
          : "style" === t
            ? (function (e, t, n) {
              const r = e.style,
                o = _(n);
              if (n && !o) {
                if (t && !_(t)) for (const e in t) null == n[e] && Ls(r, e, "");
                for (const e in n) Ls(r, e, n[e]);
              } else {
                const s = r.display;
                o
                  ? t !== n && (r.cssText = n)
                  : t && e.removeAttribute("style"),
                  ys in e && (r.display = s);
              }
            })(e, n, r)
            : a(t)
              ? l(t) || Ss(e, t, 0, r, c)
              : (
                "." === t[0]
                  ? ((t = t.slice(1)), 1)
                  : "^" === t[0]
                    ? ((t = t.slice(1)), 0)
                    : (function (e, t, n, r) {
                      if (r)
                        return (
                          "innerHTML" === t ||
                          "textContent" === t ||
                          !!(t in e && xs.test(t) && h(n))
                        );
                      if (
                        "spellcheck" === t ||
                        "draggable" === t ||
                        "translate" === t
                      )
                        return !1;
                      if ("form" === t) return !1;
                      if ("list" === t && "INPUT" === e.tagName) return !1;
                      if ("type" === t && "TEXTAREA" === e.tagName) return !1;
                      if (xs.test(t) && _(n)) return !1;
                      return t in e;
                    })(e, t, r, o)
              )
                ? (function (e, t, n, r, o, s, a) {
                  if ("innerHTML" === t || "textContent" === t)
                    return r && a(r, o, s), void (e[t] = null == n ? "" : n);
                  const l = e.tagName;
                  if ("value" === t && "PROGRESS" !== l && !l.includes("-")) {
                    e._value = n;
                    const r = null == n ? "" : n;
                    return (
                      ("OPTION" === l ? e.getAttribute("value") : e.value) !== r &&
                      (e.value = r),
                      void (null == n && e.removeAttribute(t))
                    );
                  }
                  let c = !1;
                  if ("" === n || null == n) {
                    const r = typeof e[t];
                    "boolean" === r
                      ? (n = X(n))
                      : null == n && "string" === r
                        ? ((n = ""), (c = !0))
                        : "number" === r && ((n = 0), (c = !0));
                  }
                  try {
                    e[t] = n;
                  } catch (i) { }
                  c && e.removeAttribute(t);
                })(e, t, r, s, c, i, u)
                : ("true-value" === t
                  ? (e._trueValue = r)
                  : "false-value" === t && (e._falseValue = r),
                  (function (e, t, n, r, o) {
                    if (r && t.startsWith("xlink:"))
                      null == n
                        ? e.removeAttributeNS(Ts, t.slice(6, t.length))
                        : e.setAttributeNS(Ts, t, n);
                    else {
                      const r = Y(t);
                      null == n || (r && !X(n))
                        ? e.removeAttribute(t)
                        : e.setAttribute(t, r ? "" : n);
                    }
                  })(e, t, r, o));
      },
    },
    rs
  );
let Us;
function $s() {
  return Us || (Us = qr(Ds));
}
const Ws = (...e) => {
  $s().render(...e);
};
const js = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t) n[r] = o;
  return n;
};
const Vs = js({}, [
  [
    "render",
    function (e, t) {
      const n = mn("router-view");
      return fo(), go(n);
    },
  ],
]),
  Hs = {},
  Bs = function (e, t, n) {
    if (!t || 0 === t.length) return e();
    const r = document.getElementsByTagName("link");
    return Promise.all(
      t.map((e) => {
        if (
          ((e = (function (e, t) {
            return new URL(e, t).href;
          })(e, n)),
            e in Hs)
        )
          return;
        Hs[e] = !0;
        const t = e.endsWith(".css"),
          o = t ? '[rel="stylesheet"]' : "";
        if (!!n)
          for (let n = r.length - 1; n >= 0; n--) {
            const o = r[n];
            if (o.href === e && (!t || "stylesheet" === o.rel)) return;
          }
        else if (document.querySelector(`link[href="${e}"]${o}`)) return;
        const s = document.createElement("link");
        return (
          (s.rel = t ? "stylesheet" : "modulepreload"),
          t || ((s.as = "script"), (s.crossOrigin = "")),
          (s.href = e),
          document.head.appendChild(s),
          t
            ? new Promise((t, n) => {
              s.addEventListener("load", t),
                s.addEventListener("error", () =>
                  n(new Error(`Unable to preload CSS for ${e}`))
                );
            })
            : void 0
        );
      })
    )
      .then(() => e())
      .catch((e) => {
        const t = new Event("vite:preloadError", { cancelable: !0 });
        if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
          throw e;
      });
  },
  Gs = "undefined" != typeof window;
const Ys = Object.assign;
function Xs(e, t) {
  const n = {};
  for (const r in t) {
    const o = t[r];
    n[r] = zs(o) ? o.map(e) : e(o);
  }
  return n;
}
const Ks = () => { },
  zs = Array.isArray,
  qs = /\/$/,
  Js = (e) => e.replace(qs, "");
function Qs(e, t, n = "/") {
  let r,
    o = {},
    s = "",
    a = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return (
    l < c && l >= 0 && (c = -1),
    c > -1 &&
    ((r = t.slice(0, c)),
      (s = t.slice(c + 1, l > -1 ? l : t.length)),
      (o = e(s))),
    l > -1 && ((r = r || t.slice(0, l)), (a = t.slice(l, t.length))),
    (r = (function (e, t) {
      if (e.startsWith("/")) return e;
      if (!e) return t;
      const n = t.split("/"),
        r = e.split("/"),
        o = r[r.length - 1];
      (".." !== o && "." !== o) || r.push("");
      let s,
        a,
        l = n.length - 1;
      for (s = 0; s < r.length; s++)
        if (((a = r[s]), "." !== a)) {
          if (".." !== a) break;
          l > 1 && l--;
        }
      return (
        n.slice(0, l).join("/") +
        "/" +
        r.slice(s - (s === r.length ? 1 : 0)).join("/")
      );
    })(null != r ? r : t, n)),
    { fullPath: r + (s && "?") + s + a, path: r, query: o, hash: a }
  );
}
function Zs(e, t) {
  return t && e.toLowerCase().startsWith(t.toLowerCase())
    ? e.slice(t.length) || "/"
    : e;
}
function ea(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function ta(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!na(e[n], t[n])) return !1;
  return !0;
}
function na(e, t) {
  return zs(e) ? ra(e, t) : zs(t) ? ra(t, e) : e === t;
}
function ra(e, t) {
  return zs(t)
    ? e.length === t.length && e.every((e, n) => e === t[n])
    : 1 === e.length && e[0] === t;
}
var oa, sa, aa, la;
((sa = oa || (oa = {})).pop = "pop"),
  (sa.push = "push"),
  ((la = aa || (aa = {})).back = "back"),
  (la.forward = "forward"),
  (la.unknown = "");
const ca = /^[^#]+#/;
function ia(e, t) {
  return e.replace(ca, "#") + t;
}
const ua = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function fa(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      r = "string" == typeof n && n.startsWith("#"),
      o =
        "string" == typeof n
          ? r
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!o) return;
    t = (function (e, t) {
      const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
      return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0),
      };
    })(o, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
      null != t.left ? t.left : window.pageXOffset,
      null != t.top ? t.top : window.pageYOffset
    );
}
function pa(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const da = new Map();
let ma = () => location.protocol + "//" + location.host;
function ha(e, t) {
  const { pathname: n, search: r, hash: o } = t,
    s = e.indexOf("#");
  if (s > -1) {
    let t = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      n = o.slice(t);
    return "/" !== n[0] && (n = "/" + n), Zs(n, "");
  }
  return Zs(n, e) + r + o;
}
function _a(e, t, n, r = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: r,
    position: window.history.length,
    scroll: o ? ua() : null,
  };
}
function ga(e) {
  return "string" == typeof e || "symbol" == typeof e;
}
const va = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0,
},
  ya = Symbol("");
var ba, Ea;
function ka(e, t) {
  return Ys(new Error(), { type: e, [ya]: !0 }, t);
}
function La(e, t) {
  return e instanceof Error && ya in e && (null == t || !!(e.type & t));
}
((Ea = ba || (ba = {}))[(Ea.aborted = 4)] = "aborted"),
  (Ea[(Ea.cancelled = 8)] = "cancelled"),
  (Ea[(Ea.duplicated = 16)] = "duplicated");
const Ca = "[^/]+?",
  Na = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Ta = /[.+*?^${}()[\]/\\]/g;
function Oa(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length;) {
    const r = t[n] - e[n];
    if (r) return r;
    n++;
  }
  return e.length < t.length
    ? 1 === e.length && 80 === e[0]
      ? -1
      : 1
    : e.length > t.length
      ? 1 === t.length && 80 === t[0]
        ? 1
        : -1
      : 0;
}
function Sa(e, t) {
  let n = 0;
  const r = e.score,
    o = t.score;
  for (; n < r.length && n < o.length;) {
    const e = Oa(r[n], o[n]);
    if (e) return e;
    n++;
  }
  if (1 === Math.abs(o.length - r.length)) {
    if (Ia(r)) return 1;
    if (Ia(o)) return -1;
  }
  return o.length - r.length;
}
function Ia(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const wa = { type: 0, value: "" },
  Aa = /[a-zA-Z0-9_]/;
function Pa(e, t, n) {
  const r = (function (e, t) {
    const n = Ys({}, Na, t),
      r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const c of e) {
      const e = c.length ? [] : [90];
      n.strict && !c.length && (o += "/");
      for (let t = 0; t < c.length; t++) {
        const r = c[t];
        let a = 40 + (n.sensitive ? 0.25 : 0);
        if (0 === r.type)
          t || (o += "/"), (o += r.value.replace(Ta, "\\$&")), (a += 40);
        else if (1 === r.type) {
          const { value: e, repeatable: n, optional: i, regexp: u } = r;
          s.push({ name: e, repeatable: n, optional: i });
          const f = u || Ca;
          if (f !== Ca) {
            a += 10;
            try {
              new RegExp(`(${f})`);
            } catch (l) {
              throw new Error(
                `Invalid custom RegExp for param "${e}" (${f}): ` + l.message
              );
            }
          }
          let p = n ? `((?:${f})(?:/(?:${f}))*)` : `(${f})`;
          t || (p = i && c.length < 2 ? `(?:/${p})` : "/" + p),
            i && (p += "?"),
            (o += p),
            (a += 20),
            i && (a += -8),
            n && (a += -20),
            ".*" === f && (a += -50);
        }
        e.push(a);
      }
      r.push(e);
    }
    if (n.strict && n.end) {
      const e = r.length - 1;
      r[e][r[e].length - 1] += 0.7000000000000001;
    }
    n.strict || (o += "/?"),
      n.end ? (o += "$") : n.strict && (o += "(?:/|$)");
    const a = new RegExp(o, n.sensitive ? "" : "i");
    return {
      re: a,
      score: r,
      keys: s,
      parse: function (e) {
        const t = e.match(a),
          n = {};
        if (!t) return null;
        for (let r = 1; r < t.length; r++) {
          const e = t[r] || "",
            o = s[r - 1];
          n[o.name] = e && o.repeatable ? e.split("/") : e;
        }
        return n;
      },
      stringify: function (t) {
        let n = "",
          r = !1;
        for (const o of e) {
          (r && n.endsWith("/")) || (n += "/"), (r = !1);
          for (const e of o)
            if (0 === e.type) n += e.value;
            else if (1 === e.type) {
              const { value: s, repeatable: a, optional: l } = e,
                c = s in t ? t[s] : "";
              if (zs(c) && !a)
                throw new Error(
                  `Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`
                );
              const i = zs(c) ? c.join("/") : c;
              if (!i) {
                if (!l) throw new Error(`Missing required param "${s}"`);
                o.length < 2 &&
                  (n.endsWith("/") ? (n = n.slice(0, -1)) : (r = !0));
              }
              n += i;
            }
        }
        return n || "/";
      },
    };
  })(
    (function (e) {
      if (!e) return [[]];
      if ("/" === e) return [[wa]];
      if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
      function t(e) {
        throw new Error(`ERR (${n})/"${i}": ${e}`);
      }
      let n = 0,
        r = n;
      const o = [];
      let s;
      function a() {
        s && o.push(s), (s = []);
      }
      let l,
        c = 0,
        i = "",
        u = "";
      function f() {
        i &&
          (0 === n
            ? s.push({ type: 0, value: i })
            : 1 === n || 2 === n || 3 === n
              ? (s.length > 1 &&
                ("*" === l || "+" === l) &&
                t(
                  `A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`
                ),
                s.push({
                  type: 1,
                  value: i,
                  regexp: u,
                  repeatable: "*" === l || "+" === l,
                  optional: "*" === l || "?" === l,
                }))
              : t("Invalid state to consume buffer"),
            (i = ""));
      }
      function p() {
        i += l;
      }
      for (; c < e.length;)
        if (((l = e[c++]), "\\" !== l || 2 === n))
          switch (n) {
            case 0:
              "/" === l ? (i && f(), a()) : ":" === l ? (f(), (n = 1)) : p();
              break;
            case 4:
              p(), (n = r);
              break;
            case 1:
              "(" === l
                ? (n = 2)
                : Aa.test(l)
                  ? p()
                  : (f(), (n = 0), "*" !== l && "?" !== l && "+" !== l && c--);
              break;
            case 2:
              ")" === l
                ? "\\" == u[u.length - 1]
                  ? (u = u.slice(0, -1) + l)
                  : (n = 3)
                : (u += l);
              break;
            case 3:
              f(),
                (n = 0),
                "*" !== l && "?" !== l && "+" !== l && c--,
                (u = "");
              break;
            default:
              t("Unknown state");
          }
        else (r = n), (n = 4);
      return (
        2 === n && t(`Unfinished custom RegExp for param "${i}"`), f(), a(), o
      );
    })(e.path),
    n
  ),
    o = Ys(r, { record: e, parent: t, children: [], alias: [] });
  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
}
function xa(e, t) {
  const n = [],
    r = new Map();
  function o(e, n, r) {
    const l = !r,
      c = (function (e) {
        return {
          path: e.path,
          redirect: e.redirect,
          name: e.name,
          meta: e.meta || {},
          aliasOf: void 0,
          beforeEnter: e.beforeEnter,
          props: Fa(e),
          children: e.children || [],
          instances: {},
          leaveGuards: new Set(),
          updateGuards: new Set(),
          enterCallbacks: {},
          components:
            "components" in e
              ? e.components || null
              : e.component && { default: e.component },
        };
      })(e);
    c.aliasOf = r && r.record;
    const i = Ua(t, e),
      u = [c];
    if ("alias" in e) {
      const t = "string" == typeof e.alias ? [e.alias] : e.alias;
      for (const e of t)
        u.push(
          Ys({}, c, {
            components: r ? r.record.components : c.components,
            path: e,
            aliasOf: r ? r.record : c,
          })
        );
    }
    let f, p;
    for (const t of u) {
      const { path: u } = t;
      if (n && "/" !== u[0]) {
        const e = n.record.path,
          r = "/" === e[e.length - 1] ? "" : "/";
        t.path = n.record.path + (u && r + u);
      }
      if (
        ((f = Pa(t, n, i)),
          r
            ? r.alias.push(f)
            : ((p = p || f),
              p !== f && p.alias.push(f),
              l && e.name && !Ma(f) && s(e.name)),
          c.children)
      ) {
        const e = c.children;
        for (let t = 0; t < e.length; t++) o(e[t], f, r && r.children[t]);
      }
      (r = r || f),
        ((f.record.components && Object.keys(f.record.components).length) ||
          f.record.name ||
          f.record.redirect) &&
        a(f);
    }
    return p
      ? () => {
        s(p);
      }
      : Ks;
  }
  function s(e) {
    if (ga(e)) {
      const t = r.get(e);
      t &&
        (r.delete(e),
          n.splice(n.indexOf(t), 1),
          t.children.forEach(s),
          t.alias.forEach(s));
    } else {
      const t = n.indexOf(e);
      t > -1 &&
        (n.splice(t, 1),
          e.record.name && r.delete(e.record.name),
          e.children.forEach(s),
          e.alias.forEach(s));
    }
  }
  function a(e) {
    let t = 0;
    for (
      ;
      t < n.length &&
      Sa(e, n[t]) >= 0 &&
      (e.record.path !== n[t].record.path || !$a(e, n[t]));

    )
      t++;
    n.splice(t, 0, e), e.record.name && !Ma(e) && r.set(e.record.name, e);
  }
  return (
    (t = Ua({ strict: !1, end: !0, sensitive: !1 }, t)),
    e.forEach((e) => o(e)),
    {
      addRoute: o,
      resolve: function (e, t) {
        let o,
          s,
          a,
          l = {};
        if ("name" in e && e.name) {
          if (((o = r.get(e.name)), !o)) throw ka(1, { location: e });
          (a = o.record.name),
            (l = Ys(
              Ra(
                t.params,
                o.keys.filter((e) => !e.optional).map((e) => e.name)
              ),
              e.params &&
              Ra(
                e.params,
                o.keys.map((e) => e.name)
              )
            )),
            (s = o.stringify(l));
        } else if ("path" in e)
          (s = e.path),
            (o = n.find((e) => e.re.test(s))),
            o && ((l = o.parse(s)), (a = o.record.name));
        else {
          if (
            ((o = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path))),
              !o)
          )
            throw ka(1, { location: e, currentLocation: t });
          (a = o.record.name),
            (l = Ys({}, t.params, e.params)),
            (s = o.stringify(l));
        }
        const c = [];
        let i = o;
        for (; i;) c.unshift(i.record), (i = i.parent);
        return { name: a, path: s, params: l, matched: c, meta: Da(c) };
      },
      removeRoute: s,
      getRoutes: function () {
        return n;
      },
      getRecordMatcher: function (e) {
        return r.get(e);
      },
    }
  );
}
function Ra(e, t) {
  const n = {};
  for (const r of t) r in e && (n[r] = e[r]);
  return n;
}
function Fa(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const r in e.components) t[r] = "object" == typeof n ? n[r] : n;
  return t;
}
function Ma(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Da(e) {
  return e.reduce((e, t) => Ys(e, t.meta), {});
}
function Ua(e, t) {
  const n = {};
  for (const r in e) n[r] = r in t ? t[r] : e[r];
  return n;
}
function $a(e, t) {
  return t.children.some((t) => t === e || $a(e, t));
}
const Wa = /#/g,
  ja = /&/g,
  Va = /\//g,
  Ha = /=/g,
  Ba = /\?/g,
  Ga = /\+/g,
  Ya = /%5B/g,
  Xa = /%5D/g,
  Ka = /%5E/g,
  za = /%60/g,
  qa = /%7B/g,
  Ja = /%7C/g,
  Qa = /%7D/g,
  Za = /%20/g;
function el(e) {
  return encodeURI("" + e)
    .replace(Ja, "|")
    .replace(Ya, "[")
    .replace(Xa, "]");
}
function tl(e) {
  return el(e)
    .replace(Ga, "%2B")
    .replace(Za, "+")
    .replace(Wa, "%23")
    .replace(ja, "%26")
    .replace(za, "`")
    .replace(qa, "{")
    .replace(Qa, "}")
    .replace(Ka, "^");
}
function nl(e) {
  return null == e
    ? ""
    : (function (e) {
      return el(e).replace(Wa, "%23").replace(Ba, "%3F");
    })(e).replace(Va, "%2F");
}
function rl(e) {
  try {
    return decodeURIComponent("" + e);
  } catch (t) { }
  return "" + e;
}
function ol(e) {
  const t = {};
  if ("" === e || "?" === e) return t;
  const n = ("?" === e[0] ? e.slice(1) : e).split("&");
  for (let r = 0; r < n.length; ++r) {
    const e = n[r].replace(Ga, " "),
      o = e.indexOf("="),
      s = rl(o < 0 ? e : e.slice(0, o)),
      a = o < 0 ? null : rl(e.slice(o + 1));
    if (s in t) {
      let e = t[s];
      zs(e) || (e = t[s] = [e]), e.push(a);
    } else t[s] = a;
  }
  return t;
}
function sl(e) {
  let t = "";
  for (let n in e) {
    const r = e[n];
    if (((n = tl(n).replace(Ha, "%3D")), null == r)) {
      void 0 !== r && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (zs(r) ? r.map((e) => e && tl(e)) : [r && tl(r)]).forEach((e) => {
      void 0 !== e &&
        ((t += (t.length ? "&" : "") + n), null != e && (t += "=" + e));
    });
  }
  return t;
}
function al(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    void 0 !== r &&
      (t[n] = zs(r)
        ? r.map((e) => (null == e ? null : "" + e))
        : null == r
          ? r
          : "" + r);
  }
  return t;
}
const ll = Symbol(""),
  cl = Symbol(""),
  il = Symbol(""),
  ul = Symbol(""),
  fl = Symbol("");
function pl() {
  let e = [];
  return {
    add: function (t) {
      return (
        e.push(t),
        () => {
          const n = e.indexOf(t);
          n > -1 && e.splice(n, 1);
        }
      );
    },
    list: () => e.slice(),
    reset: function () {
      e = [];
    },
  };
}
function dl(e, t, n, r, o) {
  const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
  return () =>
    new Promise((a, l) => {
      const c = (e) => {
        var c;
        !1 === e
          ? l(ka(4, { from: n, to: t }))
          : e instanceof Error
            ? l(e)
            : "string" == typeof (c = e) || (c && "object" == typeof c)
              ? l(ka(2, { from: t, to: e }))
              : (s &&
                r.enterCallbacks[o] === s &&
                "function" == typeof e &&
                s.push(e),
                a());
      },
        i = e.call(r && r.instances[o], t, n, c);
      let u = Promise.resolve(i);
      e.length < 3 && (u = u.then(c)), u.catch((e) => l(e));
    });
}
function ml(e, t, n, r) {
  const o = [];
  for (const a of e)
    for (const e in a.components) {
      let l = a.components[e];
      if ("beforeRouteEnter" === t || a.instances[e])
        if (
          "object" == typeof (s = l) ||
          "displayName" in s ||
          "props" in s ||
          "__vccOpts" in s
        ) {
          const s = (l.__vccOpts || l)[t];
          s && o.push(dl(s, n, r, a, e));
        } else {
          let s = l();
          o.push(() =>
            s.then((o) => {
              if (!o)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${e}" at "${a.path}"`)
                );
              const s =
                (l = o).__esModule || "Module" === l[Symbol.toStringTag]
                  ? o.default
                  : o;
              var l;
              a.components[e] = s;
              const c = (s.__vccOpts || s)[t];
              return c && dl(c, n, r, a, e)();
            })
          );
        }
    }
  var s;
  return o;
}
function hl(e) {
  const t = xr(il),
    n = xr(ul),
    r = qo(() => t.resolve(Lt(e.to))),
    o = qo(() => {
      const { matched: e } = r.value,
        { length: t } = e,
        o = e[t - 1],
        s = n.matched;
      if (!o || !s.length) return -1;
      const a = s.findIndex(ea.bind(null, o));
      if (a > -1) return a;
      const l = gl(e[t - 2]);
      return t > 1 && gl(o) === l && s[s.length - 1].path !== l
        ? s.findIndex(ea.bind(null, e[t - 2]))
        : a;
    }),
    s = qo(
      () =>
        o.value > -1 &&
        (function (e, t) {
          for (const n in t) {
            const r = t[n],
              o = e[n];
            if ("string" == typeof r) {
              if (r !== o) return !1;
            } else if (
              !zs(o) ||
              o.length !== r.length ||
              r.some((e, t) => e !== o[t])
            )
              return !1;
          }
          return !0;
        })(n.params, r.value.params)
    ),
    a = qo(
      () =>
        o.value > -1 &&
        o.value === n.matched.length - 1 &&
        ta(n.params, r.value.params)
    );
  return {
    route: r,
    href: qo(() => r.value.href),
    isActive: s,
    isExactActive: a,
    navigate: function (n = {}) {
      return (function (e) {
        if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) return;
        if (e.defaultPrevented) return;
        if (void 0 !== e.button && 0 !== e.button) return;
        if (e.currentTarget && e.currentTarget.getAttribute) {
          const t = e.currentTarget.getAttribute("target");
          if (/\b_blank\b/i.test(t)) return;
        }
        e.preventDefault && e.preventDefault();
        return !0;
      })(n)
        ? t[Lt(e.replace) ? "replace" : "push"](Lt(e.to)).catch(Ks)
        : Promise.resolve();
    },
  };
}
const _l = $n({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: "page" },
  },
  useLink: hl,
  setup(e, { slots: t }) {
    const n = ot(hl(e)),
      { options: r } = xr(il),
      o = qo(() => ({
        [vl(e.activeClass, r.linkActiveClass, "router-link-active")]:
          n.isActive,
        [vl(
          e.exactActiveClass,
          r.linkExactActiveClass,
          "router-link-exact-active"
        )]: n.isExactActive,
      }));
    return () => {
      const r = t.default && t.default(n);
      return e.custom
        ? r
        : Jo(
          "a",
          {
            "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
            href: n.href,
            onClick: n.navigate,
            class: o.value,
          },
          r
        );
    };
  },
});
function gl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const vl = (e, t, n) => (null != e ? e : null != t ? t : n);
function yl(e, t) {
  if (!e) return null;
  const n = e(t);
  return 1 === n.length ? n[0] : n;
}
const bl = $n({
  name: "RouterView",
  inheritAttrs: !1,
  props: { name: { type: String, default: "default" }, route: Object },
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    const r = xr(fl),
      o = qo(() => e.route || r.value),
      s = xr(cl, 0),
      a = qo(() => {
        let e = Lt(s);
        const { matched: t } = o.value;
        let n;
        for (; (n = t[e]) && !n.components;) e++;
        return e;
      }),
      l = qo(() => o.value.matched[a.value]);
    Pr(
      cl,
      qo(() => a.value + 1)
    ),
      Pr(ll, l),
      Pr(fl, o);
    const c = yt();
    return (
      En(
        () => [c.value, l.value, e.name],
        ([e, t, n], [r, o, s]) => {
          t &&
            ((t.instances[n] = e),
              o &&
              o !== t &&
              e &&
              e === r &&
              (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards),
                t.updateGuards.size || (t.updateGuards = o.updateGuards))),
            !e ||
            !t ||
            (o && ea(t, o) && r) ||
            (t.enterCallbacks[n] || []).forEach((t) => t(e));
        },
        { flush: "post" }
      ),
      () => {
        const r = o.value,
          s = e.name,
          a = l.value,
          i = a && a.components[s];
        if (!i) return yl(n.default, { Component: i, route: r });
        const u = a.props[s],
          f = u
            ? !0 === u
              ? r.params
              : "function" == typeof u
                ? u(r)
                : u
            : null,
          p = Jo(
            i,
            Ys({}, f, t, {
              onVnodeUnmounted: (e) => {
                e.component.isUnmounted && (a.instances[s] = null);
              },
              ref: c,
            })
          );
        return yl(n.default, { Component: p, route: r }) || p;
      }
    );
  },
});
function El() {
  return xr(il);
}
function kl() {
  return xr(ul);
}
const Ll = [
  {
    path: "/",
    name: "main",
    component: () =>
      Bs(
        () => import("./Main-14r9cuNB.js"),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        import.meta.url
      ),
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          Bs(
            () => import("./Home-jCGeTYJQ.js"),
            __vite__mapDeps([11, 2, 3, 1, 4, 5, 6, 7, 8, 12]),
            import.meta.url
          ),
      },
      {
        path: "/deposit",
        name: "Deposit",
        component: () =>
          Bs(
            () => import("./Deposit-3Twm8R_T.js"),
            __vite__mapDeps([13, 2, 3, 14, 5, 15, 9, 16, 17, 6, 18, 8]),
            import.meta.url
          ),
      },
      {
        path: "/unstake",
        name: "Unstake",
        component: () =>
          Bs(
            () => import("./Unstake-p0GX71R8.js"),
            __vite__mapDeps([19, 2, 3, 14, 5, 15, 4, 9, 16, 17, 20, 8]),
            import.meta.url
          ),
      },
      {
        path: "/claim",
        name: "Claim",
        component: () =>
          Bs(
            () => import("./Claim-QUHrbVTU.js"),
            __vite__mapDeps([21, 2, 3, 4, 9, 16, 17, 22, 8]),
            import.meta.url
          ),
      },
      {
        path: "/faq",
        name: "FAQ",
        component: () =>
          Bs(
            () => import("./FAQ-7xTh9Np8.js"),
            __vite__mapDeps([23, 24, 8]),
            import.meta.url
          ),
      },
    ],
  },
],
  Cl = (function (e) {
    const t = xa(e.routes, e),
      n = e.parseQuery || ol,
      r = e.stringifyQuery || sl,
      o = e.history,
      s = pl(),
      a = pl(),
      l = pl(),
      c = bt(va);
    let i = va;
    Gs &&
      e.scrollBehavior &&
      "scrollRestoration" in history &&
      (history.scrollRestoration = "manual");
    const u = Xs.bind(null, (e) => "" + e),
      f = Xs.bind(null, nl),
      p = Xs.bind(null, rl);
    function d(e, s) {
      if (((s = Ys({}, s || c.value)), "string" == typeof e)) {
        const r = Qs(n, e, s.path),
          a = t.resolve({ path: r.path }, s),
          l = o.createHref(r.fullPath);
        return Ys(r, a, {
          params: p(a.params),
          hash: rl(r.hash),
          redirectedFrom: void 0,
          href: l,
        });
      }
      let a;
      if ("path" in e) a = Ys({}, e, { path: Qs(n, e.path, s.path).path });
      else {
        const t = Ys({}, e.params);
        for (const e in t) null == t[e] && delete t[e];
        (a = Ys({}, e, { params: f(t) })), (s.params = f(s.params));
      }
      const l = t.resolve(a, s),
        i = e.hash || "";
      l.params = u(p(l.params));
      const d = (function (e, t) {
        const n = t.query ? e(t.query) : "";
        return t.path + (n && "?") + n + (t.hash || "");
      })(
        r,
        Ys({}, e, {
          hash:
            ((m = i), el(m).replace(qa, "{").replace(Qa, "}").replace(Ka, "^")),
          path: l.path,
        })
      );
      var m;
      const h = o.createHref(d);
      return Ys(
        { fullPath: d, hash: i, query: r === sl ? al(e.query) : e.query || {} },
        l,
        { redirectedFrom: void 0, href: h }
      );
    }
    function m(e) {
      return "string" == typeof e ? Qs(n, e, c.value.path) : Ys({}, e);
    }
    function h(e, t) {
      if (i !== e) return ka(8, { from: t, to: e });
    }
    function _(e) {
      return v(e);
    }
    function g(e) {
      const t = e.matched[e.matched.length - 1];
      if (t && t.redirect) {
        const { redirect: n } = t;
        let r = "function" == typeof n ? n(e) : n;
        return (
          "string" == typeof r &&
          ((r =
            r.includes("?") || r.includes("#") ? (r = m(r)) : { path: r }),
            (r.params = {})),
          Ys(
            {
              query: e.query,
              hash: e.hash,
              params: "path" in r ? {} : e.params,
            },
            r
          )
        );
      }
    }
    function v(e, t) {
      const n = (i = d(e)),
        o = c.value,
        s = e.state,
        a = e.force,
        l = !0 === e.replace,
        u = g(n);
      if (u)
        return v(
          Ys(m(u), {
            state: "object" == typeof u ? Ys({}, s, u.state) : s,
            force: a,
            replace: l,
          }),
          t || n
        );
      const f = n;
      let p;
      return (
        (f.redirectedFrom = t),
        !a &&
        (function (e, t, n) {
          const r = t.matched.length - 1,
            o = n.matched.length - 1;
          return (
            r > -1 &&
            r === o &&
            ea(t.matched[r], n.matched[o]) &&
            ta(t.params, n.params) &&
            e(t.query) === e(n.query) &&
            t.hash === n.hash
          );
        })(r, o, n) &&
        ((p = ka(16, { to: f, from: o })), A(o, o, !0, !1)),
        (p ? Promise.resolve(p) : E(f, o))
          .catch((e) => (La(e) ? (La(e, 2) ? e : w(e)) : I(e, f, o)))
          .then((e) => {
            if (e) {
              if (La(e, 2))
                return v(
                  Ys({ replace: l }, m(e.to), {
                    state: "object" == typeof e.to ? Ys({}, s, e.to.state) : s,
                    force: a,
                  }),
                  t || f
                );
            } else e = L(f, o, !0, l, s);
            return k(f, o, e), e;
          })
      );
    }
    function y(e, t) {
      const n = h(e, t);
      return n ? Promise.reject(n) : Promise.resolve();
    }
    function b(e) {
      const t = R.values().next().value;
      return t && "function" == typeof t.runWithContext
        ? t.runWithContext(e)
        : e();
    }
    function E(e, t) {
      let n;
      const [r, o, l] = (function (e, t) {
        const n = [],
          r = [],
          o = [],
          s = Math.max(t.matched.length, e.matched.length);
        for (let a = 0; a < s; a++) {
          const s = t.matched[a];
          s && (e.matched.find((e) => ea(e, s)) ? r.push(s) : n.push(s));
          const l = e.matched[a];
          l && (t.matched.find((e) => ea(e, l)) || o.push(l));
        }
        return [n, r, o];
      })(e, t);
      n = ml(r.reverse(), "beforeRouteLeave", e, t);
      for (const s of r)
        s.leaveGuards.forEach((r) => {
          n.push(dl(r, e, t));
        });
      const c = y.bind(null, e, t);
      return (
        n.push(c),
        M(n)
          .then(() => {
            n = [];
            for (const r of s.list()) n.push(dl(r, e, t));
            return n.push(c), M(n);
          })
          .then(() => {
            n = ml(o, "beforeRouteUpdate", e, t);
            for (const r of o)
              r.updateGuards.forEach((r) => {
                n.push(dl(r, e, t));
              });
            return n.push(c), M(n);
          })
          .then(() => {
            n = [];
            for (const r of l)
              if (r.beforeEnter)
                if (zs(r.beforeEnter))
                  for (const o of r.beforeEnter) n.push(dl(o, e, t));
                else n.push(dl(r.beforeEnter, e, t));
            return n.push(c), M(n);
          })
          .then(
            () => (
              e.matched.forEach((e) => (e.enterCallbacks = {})),
              (n = ml(l, "beforeRouteEnter", e, t)),
              n.push(c),
              M(n)
            )
          )
          .then(() => {
            n = [];
            for (const r of a.list()) n.push(dl(r, e, t));
            return n.push(c), M(n);
          })
          .catch((e) => (La(e, 8) ? e : Promise.reject(e)))
      );
    }
    function k(e, t, n) {
      l.list().forEach((r) => b(() => r(e, t, n)));
    }
    function L(e, t, n, r, s) {
      const a = h(e, t);
      if (a) return a;
      const l = t === va,
        i = Gs ? history.state : {};
      n &&
        (r || l
          ? o.replace(e.fullPath, Ys({ scroll: l && i && i.scroll }, s))
          : o.push(e.fullPath, s)),
        (c.value = e),
        A(e, t, n, l),
        w();
    }
    let C;
    function N() {
      C ||
        (C = o.listen((e, t, n) => {
          if (!F.listening) return;
          const r = d(e),
            s = g(r);
          if (s) return void v(Ys(s, { replace: !0 }), r).catch(Ks);
          i = r;
          const a = c.value;
          var l, u;
          Gs && ((l = pa(a.fullPath, n.delta)), (u = ua()), da.set(l, u)),
            E(r, a)
              .catch((e) =>
                La(e, 12)
                  ? e
                  : La(e, 2)
                    ? (v(e.to, r)
                      .then((e) => {
                        La(e, 20) &&
                          !n.delta &&
                          n.type === oa.pop &&
                          o.go(-1, !1);
                      })
                      .catch(Ks),
                      Promise.reject())
                    : (n.delta && o.go(-n.delta, !1), I(e, r, a))
              )
              .then((e) => {
                (e = e || L(r, a, !1)) &&
                  (n.delta && !La(e, 8)
                    ? o.go(-n.delta, !1)
                    : n.type === oa.pop && La(e, 20) && o.go(-1, !1)),
                  k(r, a, e);
              })
              .catch(Ks);
        }));
    }
    let T,
      O = pl(),
      S = pl();
    function I(e, t, n) {
      w(e);
      const r = S.list();
      return r.length && r.forEach((r) => r(e, t, n)), Promise.reject(e);
    }
    function w(e) {
      return (
        T ||
        ((T = !e),
          N(),
          O.list().forEach(([t, n]) => (e ? n(e) : t())),
          O.reset()),
        e
      );
    }
    function A(t, n, r, o) {
      const { scrollBehavior: s } = e;
      if (!Gs || !s) return Promise.resolve();
      const a =
        (!r &&
          (function (e) {
            const t = da.get(e);
            return da.delete(e), t;
          })(pa(t.fullPath, 0))) ||
        ((o || !r) && history.state && history.state.scroll) ||
        null;
      return Gt()
        .then(() => s(t, n, a))
        .then((e) => e && fa(e))
        .catch((e) => I(e, t, n));
    }
    const P = (e) => o.go(e);
    let x;
    const R = new Set(),
      F = {
        currentRoute: c,
        listening: !0,
        addRoute: function (e, n) {
          let r, o;
          return (
            ga(e) ? ((r = t.getRecordMatcher(e)), (o = n)) : (o = e),
            t.addRoute(o, r)
          );
        },
        removeRoute: function (e) {
          const n = t.getRecordMatcher(e);
          n && t.removeRoute(n);
        },
        hasRoute: function (e) {
          return !!t.getRecordMatcher(e);
        },
        getRoutes: function () {
          return t.getRoutes().map((e) => e.record);
        },
        resolve: d,
        options: e,
        push: _,
        replace: function (e) {
          return _(Ys(m(e), { replace: !0 }));
        },
        go: P,
        back: () => P(-1),
        forward: () => P(1),
        beforeEach: s.add,
        beforeResolve: a.add,
        afterEach: l.add,
        onError: S.add,
        isReady: function () {
          return T && c.value !== va
            ? Promise.resolve()
            : new Promise((e, t) => {
              O.add([e, t]);
            });
        },
        install(e) {
          e.component("RouterLink", _l),
            e.component("RouterView", bl),
            (e.config.globalProperties.$router = this),
            Object.defineProperty(e.config.globalProperties, "$route", {
              enumerable: !0,
              get: () => Lt(c),
            }),
            Gs &&
            !x &&
            c.value === va &&
            ((x = !0), _(o.location).catch((e) => { }));
          const t = {};
          for (const r in va)
            Object.defineProperty(t, r, {
              get: () => c.value[r],
              enumerable: !0,
            });
          e.provide(il, this), e.provide(ul, st(t)), e.provide(fl, c);
          const n = e.unmount;
          R.add(e),
            (e.unmount = function () {
              R.delete(e),
                R.size < 1 &&
                ((i = va),
                  C && C(),
                  (C = null),
                  (c.value = va),
                  (x = !1),
                  (T = !1)),
                n();
            });
        },
      };
    function M(e) {
      return e.reduce((e, t) => e.then(() => b(t)), Promise.resolve());
    }
    return F;
  })({
    history: (function (e) {
      const t = (function (e) {
        const { history: t, location: n } = window,
          r = { value: ha(e, n) },
          o = { value: t.state };
        function s(r, s, a) {
          const l = e.indexOf("#"),
            c =
              l > -1
                ? (n.host && document.querySelector("base")
                  ? e
                  : e.slice(l)) + r
                : ma() + e + r;
          try {
            t[a ? "replaceState" : "pushState"](s, "", c), (o.value = s);
          } catch (i) {
            n[a ? "replace" : "assign"](c);
          }
        }
        return (
          o.value ||
          s(
            r.value,
            {
              back: null,
              current: r.value,
              forward: null,
              position: t.length - 1,
              replaced: !0,
              scroll: null,
            },
            !0
          ),
          {
            location: r,
            state: o,
            push: function (e, n) {
              const a = Ys({}, o.value, t.state, {
                forward: e,
                scroll: ua(),
              });
              s(a.current, a, !0),
                s(
                  e,
                  Ys(
                    {},
                    _a(r.value, e, null),
                    { position: a.position + 1 },
                    n
                  ),
                  !1
                ),
                (r.value = e);
            },
            replace: function (e, n) {
              s(
                e,
                Ys({}, t.state, _a(o.value.back, e, o.value.forward, !0), n, {
                  position: o.value.position,
                }),
                !0
              ),
                (r.value = e);
            },
          }
        );
      })(
        (e = (function (e) {
          if (!e)
            if (Gs) {
              const t = document.querySelector("base");
              e = (e = (t && t.getAttribute("href")) || "/").replace(
                /^\w+:\/\/[^\/]+/,
                ""
              );
            } else e = "/";
          return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), Js(e);
        })(e))
      ),
        n = (function (e, t, n, r) {
          let o = [],
            s = [],
            a = null;
          const l = ({ state: s }) => {
            const l = ha(e, location),
              c = n.value,
              i = t.value;
            let u = 0;
            if (s) {
              if (((n.value = l), (t.value = s), a && a === c))
                return void (a = null);
              u = i ? s.position - i.position : 0;
            } else r(l);
            o.forEach((e) => {
              e(n.value, c, {
                delta: u,
                type: oa.pop,
                direction: u ? (u > 0 ? aa.forward : aa.back) : aa.unknown,
              });
            });
          };
          function c() {
            const { history: e } = window;
            e.state && e.replaceState(Ys({}, e.state, { scroll: ua() }), "");
          }
          return (
            window.addEventListener("popstate", l),
            window.addEventListener("beforeunload", c, { passive: !0 }),
            {
              pauseListeners: function () {
                a = n.value;
              },
              listen: function (e) {
                o.push(e);
                const t = () => {
                  const t = o.indexOf(e);
                  t > -1 && o.splice(t, 1);
                };
                return s.push(t), t;
              },
              destroy: function () {
                for (const e of s) e();
                (s = []),
                  window.removeEventListener("popstate", l),
                  window.removeEventListener("beforeunload", c);
              },
            }
          );
        })(e, t.state, t.location, t.replace),
        r = Ys(
          {
            location: "",
            base: e,
            go: function (e, t = !0) {
              t || n.pauseListeners(), history.go(e);
            },
            createHref: ia.bind(null, e),
          },
          t,
          n
        );
      return (
        Object.defineProperty(r, "location", {
          enumerable: !0,
          get: () => t.location.value,
        }),
        Object.defineProperty(r, "state", {
          enumerable: !0,
          get: () => t.state.value,
        }),
        r
      );
    })(),
    routes: Ll,
    scrollBehavior: (e, t, n) =>
      e.path !== t.path ? { top: 0 } : n || { x: 0, y: 0 },
  });
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let Nl;
const Tl = (e) => (Nl = e),
  Ol = Symbol();
function Sl(e) {
  return (
    e &&
    "object" == typeof e &&
    "[object Object]" === Object.prototype.toString.call(e) &&
    "function" != typeof e.toJSON
  );
}
var Il, wl;
((wl = Il || (Il = {})).direct = "direct"),
  (wl.patchObject = "patch object"),
  (wl.patchFunction = "patch function");
const Al = () => { };
function Pl(e, t, n, r = Al) {
  e.push(t);
  const o = () => {
    const n = e.indexOf(t);
    n > -1 && (e.splice(n, 1), r());
  };
  return !n && Z() && ee(o), o;
}
function xl(e, ...t) {
  e.slice().forEach((e) => {
    e(...t);
  });
}
const Rl = (e) => e();
function Fl(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((t, n) => e.set(n, t)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const r = t[n],
      o = e[n];
    Sl(o) && Sl(r) && e.hasOwnProperty(n) && !vt(r) && !ct(r)
      ? (e[n] = Fl(o, r))
      : (e[n] = r);
  }
  return e;
}
const Ml = Symbol();
const { assign: Dl } = Object;
function Ul(e, t, n, r) {
  const { state: o, actions: s, getters: a } = t,
    l = n.state.value[e];
  let c;
  return (
    (c = $l(
      e,
      function () {
        l || (n.state.value[e] = o ? o() : {});
        const t = (function (e) {
          const t = p(e) ? new Array(e.length) : {};
          for (const n in e) t[n] = It(e, n);
          return t;
        })(n.state.value[e]);
        return Dl(
          t,
          s,
          Object.keys(a || {}).reduce(
            (t, r) => (
              (t[r] = dt(
                qo(() => {
                  Tl(n);
                  const t = n._s.get(e);
                  return a[r].call(t, t);
                })
              )),
              t
            ),
            {}
          )
        );
      },
      t,
      n,
      r,
      !0
    )),
    c
  );
}
function $l(e, t, n = {}, r, o, s) {
  let a;
  const l = Dl({ actions: {} }, n),
    c = { deep: !0 };
  let i,
    u,
    f,
    p = [],
    d = [];
  const m = r.state.value[e];
  let h;
  function _(t) {
    let n;
    (i = u = !1),
      "function" == typeof t
        ? (t(r.state.value[e]),
          (n = { type: Il.patchFunction, storeId: e, events: f }))
        : (Fl(r.state.value[e], t),
          (n = { type: Il.patchObject, payload: t, storeId: e, events: f }));
    const o = (h = Symbol());
    Gt().then(() => {
      h === o && (i = !0);
    }),
      (u = !0),
      xl(p, n, r.state.value[e]);
  }
  s || m || (r.state.value[e] = {}), yt({});
  const g = s
    ? function () {
      const { state: e } = n,
        t = e ? e() : {};
      this.$patch((e) => {
        Dl(e, t);
      });
    }
    : Al;
  function v(t, n) {
    return function () {
      Tl(r);
      const o = Array.from(arguments),
        s = [],
        a = [];
      let l;
      xl(d, {
        args: o,
        name: t,
        store: y,
        after: function (e) {
          s.push(e);
        },
        onError: function (e) {
          a.push(e);
        },
      });
      try {
        l = n.apply(this && this.$id === e ? this : y, o);
      } catch (c) {
        throw (xl(a, c), c);
      }
      return l instanceof Promise
        ? l
          .then((e) => (xl(s, e), e))
          .catch((e) => (xl(a, e), Promise.reject(e)))
        : (xl(s, l), l);
    };
  }
  const y = ot({
    _p: r,
    $id: e,
    $onAction: Pl.bind(null, d),
    $patch: _,
    $reset: g,
    $subscribe(t, n = {}) {
      const o = Pl(p, t, n.detached, () => s()),
        s = a.run(() =>
          En(
            () => r.state.value[e],
            (r) => {
              ("sync" === n.flush ? u : i) &&
                t({ storeId: e, type: Il.direct, events: f }, r);
            },
            Dl({}, c, n)
          )
        );
      return o;
    },
    $dispose: function () {
      a.stop(), (p = []), (d = []), r._s.delete(e);
    },
  });
  r._s.set(e, y);
  const b = ((r._a && r._a.runWithContext) || Rl)(() =>
    r._e.run(() => (a = Q()).run(t))
  );
  for (const L in b) {
    const t = b[L];
    if ((vt(t) && (!vt((k = t)) || !k.effect)) || ct(t))
      s ||
        (!m ||
          (Sl((E = t)) && E.hasOwnProperty(Ml)) ||
          (vt(t) ? (t.value = m[L]) : Fl(t, m[L])),
          (r.state.value[e][L] = t));
    else if ("function" == typeof t) {
      const e = v(L, t);
      (b[L] = e), (l.actions[L] = t);
    }
  }
  var E, k;
  return (
    Dl(y, b),
    Dl(pt(y), b),
    Object.defineProperty(y, "$state", {
      get: () => r.state.value[e],
      set: (e) => {
        _((t) => {
          Dl(t, e);
        });
      },
    }),
    r._p.forEach((e) => {
      Dl(
        y,
        a.run(() => e({ store: y, app: r._a, pinia: r, options: l }))
      );
    }),
    m && s && n.hydrate && n.hydrate(y.$state, m),
    (i = !0),
    (u = !0),
    y
  );
}
function Wl(e, t, n) {
  let r, o;
  const s = "function" == typeof t;
  function a(e, n) {
    (e = e || (!!(Mo || nn || Ar) ? xr(Ol, null) : null)) && Tl(e),
      (e = Nl)._s.has(r) || (s ? $l(r, t, o, e) : Ul(r, o, e));
    return e._s.get(r);
  }
  return (
    "string" == typeof e ? ((r = e), (o = s ? n : t)) : ((o = e), (r = e.id)),
    (a.$id = r),
    a
  );
}
const jl = Wl("main", {
  state: () => ({
    accounts: "",
    Balance: 0,
    ConnectWalletDialog: !1,
    DepositList: [],
    Apr: 0,
    TotalDepositInUSDT: 0,
    EthPrice: 0,
    TokenPrice: 0,
    Allowance: 0,
    StakedAmount: 0,
    isMobile: window.innerWidth < 600,
  }),
  getters: {},
  actions: {
    SetConnectWalletDialog(e) {
      this.ConnectWalletDialog = e;
    },
    SetAccounts(e) {
      this.accounts = e;
    },
    SetBalance(e) {
      this.Balance = Number(e).toFixed(6);
    },
    SetAllowance(e) {
      this.Allowance = e;
    },
    SetDepositList(e) {
      this.DepositList = e;
    },
    SetStakedAmount(e) {
      this.StakedAmount = Number(e).toFixed(6);
    },
    SetApr(e) {
      this.Apr = e;
    },
    SetTotalDepositInUSDT(e) {
      this.TotalDepositInUSDT = e;
    },
    SetEthPrice(e) {
      this.EthPrice = e;
    },
    SetMsStakeToUPrice(e) {
      this.TokenPrice = e;
    },
    setMobile(e) {
      this.isMobile = e;
    },
  },
}),
  Vl = "undefined" != typeof window,
  Hl = (e, t = !1) => (t ? Symbol.for(e) : Symbol(e)),
  Bl = (e, t, n) => Gl({ l: e, k: t, s: n }),
  Gl = (e) =>
    JSON.stringify(e)
      .replace(/\u2028/g, "\\u2028")
      .replace(/\u2029/g, "\\u2029")
      .replace(/\u0027/g, "\\u0027"),
  Yl = (e) => "number" == typeof e && isFinite(e),
  Xl = (e) => "[object Date]" === ic(e),
  Kl = (e) => "[object RegExp]" === ic(e),
  zl = (e) => uc(e) && 0 === Object.keys(e).length,
  ql = Object.assign;
/*!
 * shared v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */ let Jl;
const Ql = () =>
  Jl ||
  (Jl =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : {});
function Zl(e) {
  return e
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
const ec = Object.prototype.hasOwnProperty;
function tc(e, t) {
  return ec.call(e, t);
}
const nc = Array.isArray,
  rc = (e) => "function" == typeof e,
  oc = (e) => "string" == typeof e,
  sc = (e) => "boolean" == typeof e,
  ac = (e) => null !== e && "object" == typeof e,
  lc = (e) => ac(e) && rc(e.then) && rc(e.catch),
  cc = Object.prototype.toString,
  ic = (e) => cc.call(e),
  uc = (e) => {
    if (!ac(e)) return !1;
    const t = Object.getPrototypeOf(e);
    return null === t || t.constructor === Object;
  };
function fc(e) {
  let t = e;
  return () => ++t;
}
function pc(e, t) { }
const dc = (e) => !ac(e) || nc(e);
function mc(e, t) {
  if (dc(e) || dc(t)) throw new Error("Invalid value");
  for (const n in e)
    tc(e, n) && (dc(e[n]) || dc(t[n]) ? (t[n] = e[n]) : mc(e[n], t[n]));
}
/*!
 * message-compiler v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */ function hc(e, t, n) {
  const r = { start: e, end: t };
  return null != n && (r.source = n), r;
}
const _c = /\{([0-9a-zA-Z]+)\}/g;
const gc = Object.assign,
  vc = (e) => "string" == typeof e,
  yc = (e) => null !== e && "object" == typeof e;
function bc(e, t = "") {
  return e.reduce((e, n, r) => (0 === r ? e + n : e + t + n), "");
}
const Ec = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  __EXTEND_POINT__: 17,
},
  kc = {
    [Ec.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [Ec.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [Ec.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:
      "Unterminated single quote in placeholder",
    [Ec.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [Ec.INVALID_UNICODE_ESCAPE_SEQUENCE]:
      "Invalid unicode escape sequence: {0}",
    [Ec.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [Ec.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [Ec.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [Ec.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [Ec.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [Ec.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [Ec.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [Ec.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [Ec.UNEXPECTED_LEXICAL_ANALYSIS]:
      "Unexpected lexical analysis in token: '{0}'",
    [Ec.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [Ec.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'",
  };
function Lc(e, t, n = {}) {
  const { domain: r, messages: o, args: s } = n,
    a = (function (e, ...t) {
      return (
        1 === t.length && yc(t[0]) && (t = t[0]),
        (t && t.hasOwnProperty) || (t = {}),
        e.replace(_c, (e, n) => (t.hasOwnProperty(n) ? t[n] : ""))
      );
    })((o || kc)[e] || "", ...(s || [])),
    l = new SyntaxError(String(a));
  return (l.code = e), t && (l.location = t), (l.domain = r), l;
}
function Cc(e) {
  throw e;
}
const Nc = " ",
  Tc = "\r",
  Oc = "\n",
  Sc = String.fromCharCode(8232),
  Ic = String.fromCharCode(8233);
function wc(e) {
  const t = e;
  let n = 0,
    r = 1,
    o = 1,
    s = 0;
  const a = (e) => t[e] === Tc && t[e + 1] === Oc,
    l = (e) => t[e] === Ic,
    c = (e) => t[e] === Sc,
    i = (e) => a(e) || ((e) => t[e] === Oc)(e) || l(e) || c(e),
    u = (e) => (a(e) || l(e) || c(e) ? Oc : t[e]);
  function f() {
    return (s = 0), i(n) && (r++, (o = 0)), a(n) && n++, n++, o++, t[n];
  }
  return {
    index: () => n,
    line: () => r,
    column: () => o,
    peekOffset: () => s,
    charAt: u,
    currentChar: () => u(n),
    currentPeek: () => u(n + s),
    next: f,
    peek: function () {
      return a(n + s) && s++, s++, t[n + s];
    },
    reset: function () {
      (n = 0), (r = 1), (o = 1), (s = 0);
    },
    resetPeek: function (e = 0) {
      s = e;
    },
    skipToPeek: function () {
      const e = n + s;
      for (; e !== n;) f();
      s = 0;
    },
  };
}
const Ac = void 0,
  Pc = ".",
  xc = "'",
  Rc = "tokenizer";
function Fc(e, t = {}) {
  const n = !1 !== t.location,
    r = wc(e),
    o = () => r.index(),
    s = () => {
      return (
        (e = r.line()),
        (t = r.column()),
        (n = r.index()),
        { line: e, column: t, offset: n }
      );
      var e, t, n;
    },
    a = s(),
    l = o(),
    c = {
      currentType: 14,
      offset: l,
      startLoc: a,
      endLoc: a,
      lastType: 14,
      lastOffset: l,
      lastStartLoc: a,
      lastEndLoc: a,
      braceNest: 0,
      inLinked: !1,
      text: "",
    },
    i = () => c,
    { onError: u } = t;
  function f(e, t, r, ...o) {
    const s = i();
    if (((t.column += r), (t.offset += r), u)) {
      const r = Lc(e, n ? hc(s.startLoc, t) : null, { domain: Rc, args: o });
      u(r);
    }
  }
  function p(e, t, r) {
    (e.endLoc = s()), (e.currentType = t);
    const o = { type: t };
    return (
      n && (o.loc = hc(e.startLoc, e.endLoc)), null != r && (o.value = r), o
    );
  }
  const d = (e) => p(e, 14);
  function m(e, t) {
    return e.currentChar() === t
      ? (e.next(), t)
      : (f(Ec.EXPECTED_TOKEN, s(), 0, t), "");
  }
  function h(e) {
    let t = "";
    for (; e.currentPeek() === Nc || e.currentPeek() === Oc;)
      (t += e.currentPeek()), e.peek();
    return t;
  }
  function _(e) {
    const t = h(e);
    return e.skipToPeek(), t;
  }
  function g(e) {
    if (e === Ac) return !1;
    const t = e.charCodeAt(0);
    return (t >= 97 && t <= 122) || (t >= 65 && t <= 90) || 95 === t;
  }
  function v(e, t) {
    const { currentType: n } = t;
    if (2 !== n) return !1;
    h(e);
    const r = (function (e) {
      if (e === Ac) return !1;
      const t = e.charCodeAt(0);
      return t >= 48 && t <= 57;
    })("-" === e.currentPeek() ? e.peek() : e.currentPeek());
    return e.resetPeek(), r;
  }
  function y(e) {
    h(e);
    const t = "|" === e.currentPeek();
    return e.resetPeek(), t;
  }
  function b(e, t = !0) {
    const n = (t = !1, r = "", o = !1) => {
      const s = e.currentPeek();
      return "{" === s
        ? "%" !== r && t
        : "@" !== s && s
          ? "%" === s
            ? (e.peek(), n(t, "%", !0))
            : "|" === s
              ? !("%" !== r && !o) || !(r === Nc || r === Oc)
              : s === Nc
                ? (e.peek(), n(!0, Nc, o))
                : s !== Oc || (e.peek(), n(!0, Oc, o))
          : "%" === r || t;
    },
      r = n();
    return t && e.resetPeek(), r;
  }
  function E(e, t) {
    const n = e.currentChar();
    return n === Ac ? Ac : t(n) ? (e.next(), n) : null;
  }
  function k(e) {
    return E(e, (e) => {
      const t = e.charCodeAt(0);
      return (
        (t >= 97 && t <= 122) ||
        (t >= 65 && t <= 90) ||
        (t >= 48 && t <= 57) ||
        95 === t ||
        36 === t
      );
    });
  }
  function L(e) {
    return E(e, (e) => {
      const t = e.charCodeAt(0);
      return t >= 48 && t <= 57;
    });
  }
  function C(e) {
    return E(e, (e) => {
      const t = e.charCodeAt(0);
      return (
        (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102)
      );
    });
  }
  function N(e) {
    let t = "",
      n = "";
    for (; (t = L(e));) n += t;
    return n;
  }
  function T(e) {
    let t = "";
    for (; ;) {
      const n = e.currentChar();
      if ("{" === n || "}" === n || "@" === n || "|" === n || !n) break;
      if ("%" === n) {
        if (!b(e)) break;
        (t += n), e.next();
      } else if (n === Nc || n === Oc)
        if (b(e)) (t += n), e.next();
        else {
          if (y(e)) break;
          (t += n), e.next();
        }
      else (t += n), e.next();
    }
    return t;
  }
  function O(e) {
    const t = e.currentChar();
    switch (t) {
      case "\\":
      case "'":
        return e.next(), `\\${t}`;
      case "u":
        return S(e, t, 4);
      case "U":
        return S(e, t, 6);
      default:
        return f(Ec.UNKNOWN_ESCAPE_SEQUENCE, s(), 0, t), "";
    }
  }
  function S(e, t, n) {
    m(e, t);
    let r = "";
    for (let o = 0; o < n; o++) {
      const n = C(e);
      if (!n) {
        f(
          Ec.INVALID_UNICODE_ESCAPE_SEQUENCE,
          s(),
          0,
          `\\${t}${r}${e.currentChar()}`
        );
        break;
      }
      r += n;
    }
    return `\\${t}${r}`;
  }
  function I(e) {
    _(e);
    const t = m(e, "|");
    return _(e), t;
  }
  function w(e, t) {
    let n = null;
    switch (e.currentChar()) {
      case "{":
        return (
          t.braceNest >= 1 && f(Ec.NOT_ALLOW_NEST_PLACEHOLDER, s(), 0),
          e.next(),
          (n = p(t, 2, "{")),
          _(e),
          t.braceNest++,
          n
        );
      case "}":
        return (
          t.braceNest > 0 &&
          2 === t.currentType &&
          f(Ec.EMPTY_PLACEHOLDER, s(), 0),
          e.next(),
          (n = p(t, 3, "}")),
          t.braceNest--,
          t.braceNest > 0 && _(e),
          t.inLinked && 0 === t.braceNest && (t.inLinked = !1),
          n
        );
      case "@":
        return (
          t.braceNest > 0 && f(Ec.UNTERMINATED_CLOSING_BRACE, s(), 0),
          (n = A(e, t) || d(t)),
          (t.braceNest = 0),
          n
        );
      default:
        let r = !0,
          o = !0,
          a = !0;
        if (y(e))
          return (
            t.braceNest > 0 && f(Ec.UNTERMINATED_CLOSING_BRACE, s(), 0),
            (n = p(t, 1, I(e))),
            (t.braceNest = 0),
            (t.inLinked = !1),
            n
          );
        if (
          t.braceNest > 0 &&
          (5 === t.currentType || 6 === t.currentType || 7 === t.currentType)
        )
          return (
            f(Ec.UNTERMINATED_CLOSING_BRACE, s(), 0), (t.braceNest = 0), P(e, t)
          );
        if (
          (r = (function (e, t) {
            const { currentType: n } = t;
            if (2 !== n) return !1;
            h(e);
            const r = g(e.currentPeek());
            return e.resetPeek(), r;
          })(e, t))
        )
          return (
            (n = p(
              t,
              5,
              (function (e) {
                _(e);
                let t = "",
                  n = "";
                for (; (t = k(e));) n += t;
                return (
                  e.currentChar() === Ac &&
                  f(Ec.UNTERMINATED_CLOSING_BRACE, s(), 0),
                  n
                );
              })(e)
            )),
            _(e),
            n
          );
        if ((o = v(e, t)))
          return (
            (n = p(
              t,
              6,
              (function (e) {
                _(e);
                let t = "";
                return (
                  "-" === e.currentChar()
                    ? (e.next(), (t += `-${N(e)}`))
                    : (t += N(e)),
                  e.currentChar() === Ac &&
                  f(Ec.UNTERMINATED_CLOSING_BRACE, s(), 0),
                  t
                );
              })(e)
            )),
            _(e),
            n
          );
        if (
          (a = (function (e, t) {
            const { currentType: n } = t;
            if (2 !== n) return !1;
            h(e);
            const r = e.currentPeek() === xc;
            return e.resetPeek(), r;
          })(e, t))
        )
          return (
            (n = p(
              t,
              7,
              (function (e) {
                _(e), m(e, "'");
                let t = "",
                  n = "";
                const r = (e) => e !== xc && e !== Oc;
                for (; (t = E(e, r));) n += "\\" === t ? O(e) : t;
                const o = e.currentChar();
                return o === Oc || o === Ac
                  ? (f(Ec.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, s(), 0),
                    o === Oc && (e.next(), m(e, "'")),
                    n)
                  : (m(e, "'"), n);
              })(e)
            )),
            _(e),
            n
          );
        if (!r && !o && !a)
          return (
            (n = p(
              t,
              13,
              (function (e) {
                _(e);
                let t = "",
                  n = "";
                const r = (e) => "{" !== e && "}" !== e && e !== Nc && e !== Oc;
                for (; (t = E(e, r));) n += t;
                return n;
              })(e)
            )),
            f(Ec.INVALID_TOKEN_IN_PLACEHOLDER, s(), 0, n.value),
            _(e),
            n
          );
    }
    return n;
  }
  function A(e, t) {
    const { currentType: n } = t;
    let r = null;
    const o = e.currentChar();
    switch (
    ((8 !== n && 9 !== n && 12 !== n && 10 !== n) ||
      (o !== Oc && o !== Nc) ||
      f(Ec.INVALID_LINKED_FORMAT, s(), 0),
      o)
    ) {
      case "@":
        return e.next(), (r = p(t, 8, "@")), (t.inLinked = !0), r;
      case ".":
        return _(e), e.next(), p(t, 9, ".");
      case ":":
        return _(e), e.next(), p(t, 10, ":");
      default:
        return y(e)
          ? ((r = p(t, 1, I(e))), (t.braceNest = 0), (t.inLinked = !1), r)
          : (function (e, t) {
            const { currentType: n } = t;
            if (8 !== n) return !1;
            h(e);
            const r = "." === e.currentPeek();
            return e.resetPeek(), r;
          })(e, t) ||
            (function (e, t) {
              const { currentType: n } = t;
              if (8 !== n && 12 !== n) return !1;
              h(e);
              const r = ":" === e.currentPeek();
              return e.resetPeek(), r;
            })(e, t)
            ? (_(e), A(e, t))
            : (function (e, t) {
              const { currentType: n } = t;
              if (9 !== n) return !1;
              h(e);
              const r = g(e.currentPeek());
              return e.resetPeek(), r;
            })(e, t)
              ? (_(e),
                p(
                  t,
                  12,
                  (function (e) {
                    let t = "",
                      n = "";
                    for (; (t = k(e));) n += t;
                    return n;
                  })(e)
                ))
              : (function (e, t) {
                const { currentType: n } = t;
                if (10 !== n) return !1;
                const r = () => {
                  const t = e.currentPeek();
                  return "{" === t
                    ? g(e.peek())
                    : !(
                      "@" === t ||
                      "%" === t ||
                      "|" === t ||
                      ":" === t ||
                      "." === t ||
                      t === Nc ||
                      !t
                    ) && (t === Oc ? (e.peek(), r()) : g(t));
                },
                  o = r();
                return e.resetPeek(), o;
              })(e, t)
                ? (_(e),
                  "{" === o
                    ? w(e, t) || r
                    : p(
                      t,
                      11,
                      (function (e) {
                        const t = (n = !1, r) => {
                          const o = e.currentChar();
                          return "{" !== o &&
                            "%" !== o &&
                            "@" !== o &&
                            "|" !== o &&
                            "(" !== o &&
                            ")" !== o &&
                            o
                            ? o === Nc
                              ? r
                              : o === Oc || o === Pc
                                ? ((r += o), e.next(), t(n, r))
                                : ((r += o), e.next(), t(!0, r))
                            : r;
                        };
                        return t(!1, "");
                      })(e)
                    ))
                : (8 === n && f(Ec.INVALID_LINKED_FORMAT, s(), 0),
                  (t.braceNest = 0),
                  (t.inLinked = !1),
                  P(e, t));
    }
  }
  function P(e, t) {
    let n = { type: 14 };
    if (t.braceNest > 0) return w(e, t) || d(t);
    if (t.inLinked) return A(e, t) || d(t);
    switch (e.currentChar()) {
      case "{":
        return w(e, t) || d(t);
      case "}":
        return f(Ec.UNBALANCED_CLOSING_BRACE, s(), 0), e.next(), p(t, 3, "}");
      case "@":
        return A(e, t) || d(t);
      default:
        if (y(e))
          return (n = p(t, 1, I(e))), (t.braceNest = 0), (t.inLinked = !1), n;
        const { isModulo: r, hasSpace: o } = (function (e) {
          const t = h(e),
            n = "%" === e.currentPeek() && "{" === e.peek();
          return e.resetPeek(), { isModulo: n, hasSpace: t.length > 0 };
        })(e);
        if (r)
          return o
            ? p(t, 0, T(e))
            : p(
              t,
              4,
              (function (e) {
                _(e);
                const t = e.currentChar();
                return (
                  "%" !== t && f(Ec.EXPECTED_TOKEN, s(), 0, t), e.next(), "%"
                );
              })(e)
            );
        if (b(e)) return p(t, 0, T(e));
    }
    return n;
  }
  return {
    nextToken: function () {
      const { currentType: e, offset: t, startLoc: n, endLoc: a } = c;
      return (
        (c.lastType = e),
        (c.lastOffset = t),
        (c.lastStartLoc = n),
        (c.lastEndLoc = a),
        (c.offset = o()),
        (c.startLoc = s()),
        r.currentChar() === Ac ? p(c, 14) : P(r, c)
      );
    },
    currentOffset: o,
    currentPosition: s,
    context: i,
  };
}
const Mc = "parser",
  Dc = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Uc(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const e = parseInt(t || n, 16);
      return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
    }
  }
}
function $c(e = {}) {
  const t = !1 !== e.location,
    { onError: n } = e;
  function r(e, r, o, s, ...a) {
    const l = e.currentPosition();
    if (((l.offset += s), (l.column += s), n)) {
      const e = Lc(r, t ? hc(o, l) : null, { domain: Mc, args: a });
      n(e);
    }
  }
  function o(e, n, r) {
    const o = { type: e };
    return t && ((o.start = n), (o.end = n), (o.loc = { start: r, end: r })), o;
  }
  function s(e, n, r, o) {
    o && (e.type = o), t && ((e.end = n), e.loc && (e.loc.end = r));
  }
  function a(e, t) {
    const n = e.context(),
      r = o(3, n.offset, n.startLoc);
    return (r.value = t), s(r, e.currentOffset(), e.currentPosition()), r;
  }
  function l(e, t) {
    const n = e.context(),
      { lastOffset: r, lastStartLoc: a } = n,
      l = o(5, r, a);
    return (
      (l.index = parseInt(t, 10)),
      e.nextToken(),
      s(l, e.currentOffset(), e.currentPosition()),
      l
    );
  }
  function c(e, t) {
    const n = e.context(),
      { lastOffset: r, lastStartLoc: a } = n,
      l = o(4, r, a);
    return (
      (l.key = t),
      e.nextToken(),
      s(l, e.currentOffset(), e.currentPosition()),
      l
    );
  }
  function i(e, t) {
    const n = e.context(),
      { lastOffset: r, lastStartLoc: a } = n,
      l = o(9, r, a);
    return (
      (l.value = t.replace(Dc, Uc)),
      e.nextToken(),
      s(l, e.currentOffset(), e.currentPosition()),
      l
    );
  }
  function u(e) {
    const t = e.context(),
      n = o(6, t.offset, t.startLoc);
    let a = e.nextToken();
    if (9 === a.type) {
      const t = (function (e) {
        const t = e.nextToken(),
          n = e.context(),
          { lastOffset: a, lastStartLoc: l } = n,
          c = o(8, a, l);
        return 12 !== t.type
          ? (r(e, Ec.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0),
            (c.value = ""),
            s(c, a, l),
            { nextConsumeToken: t, node: c })
          : (null == t.value &&
            r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, Wc(t)),
            (c.value = t.value || ""),
            s(c, e.currentOffset(), e.currentPosition()),
            { node: c });
      })(e);
      (n.modifier = t.node), (a = t.nextConsumeToken || e.nextToken());
    }
    switch (
    (10 !== a.type &&
      r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Wc(a)),
      (a = e.nextToken()),
      2 === a.type && (a = e.nextToken()),
      a.type)
    ) {
      case 11:
        null == a.value &&
          r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Wc(a)),
          (n.key = (function (e, t) {
            const n = e.context(),
              r = o(7, n.offset, n.startLoc);
            return (
              (r.value = t), s(r, e.currentOffset(), e.currentPosition()), r
            );
          })(e, a.value || ""));
        break;
      case 5:
        null == a.value &&
          r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Wc(a)),
          (n.key = c(e, a.value || ""));
        break;
      case 6:
        null == a.value &&
          r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Wc(a)),
          (n.key = l(e, a.value || ""));
        break;
      case 7:
        null == a.value &&
          r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Wc(a)),
          (n.key = i(e, a.value || ""));
        break;
      default:
        r(e, Ec.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
        const u = e.context(),
          f = o(7, u.offset, u.startLoc);
        return (
          (f.value = ""),
          s(f, u.offset, u.startLoc),
          (n.key = f),
          s(n, u.offset, u.startLoc),
          { nextConsumeToken: a, node: n }
        );
    }
    return s(n, e.currentOffset(), e.currentPosition()), { node: n };
  }
  function f(e) {
    const t = e.context(),
      n = o(
        2,
        1 === t.currentType ? e.currentOffset() : t.offset,
        1 === t.currentType ? t.endLoc : t.startLoc
      );
    n.items = [];
    let f = null;
    do {
      const o = f || e.nextToken();
      switch (((f = null), o.type)) {
        case 0:
          null == o.value &&
            r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Wc(o)),
            n.items.push(a(e, o.value || ""));
          break;
        case 6:
          null == o.value &&
            r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Wc(o)),
            n.items.push(l(e, o.value || ""));
          break;
        case 5:
          null == o.value &&
            r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Wc(o)),
            n.items.push(c(e, o.value || ""));
          break;
        case 7:
          null == o.value &&
            r(e, Ec.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, Wc(o)),
            n.items.push(i(e, o.value || ""));
          break;
        case 8:
          const s = u(e);
          n.items.push(s.node), (f = s.nextConsumeToken || null);
      }
    } while (14 !== t.currentType && 1 !== t.currentType);
    return (
      s(
        n,
        1 === t.currentType ? t.lastOffset : e.currentOffset(),
        1 === t.currentType ? t.lastEndLoc : e.currentPosition()
      ),
      n
    );
  }
  function p(e) {
    const t = e.context(),
      { offset: n, startLoc: a } = t,
      l = f(e);
    return 14 === t.currentType
      ? l
      : (function (e, t, n, a) {
        const l = e.context();
        let c = 0 === a.items.length;
        const i = o(1, t, n);
        (i.cases = []), i.cases.push(a);
        do {
          const t = f(e);
          c || (c = 0 === t.items.length), i.cases.push(t);
        } while (14 !== l.currentType);
        return (
          c && r(e, Ec.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0),
          s(i, e.currentOffset(), e.currentPosition()),
          i
        );
      })(e, n, a, l);
  }
  return {
    parse: function (n) {
      const a = Fc(n, gc({}, e)),
        l = a.context(),
        c = o(0, l.offset, l.startLoc);
      return (
        t && c.loc && (c.loc.source = n),
        (c.body = p(a)),
        e.onCacheKey && (c.cacheKey = e.onCacheKey(n)),
        14 !== l.currentType &&
        r(
          a,
          Ec.UNEXPECTED_LEXICAL_ANALYSIS,
          l.lastStartLoc,
          0,
          n[l.offset] || ""
        ),
        s(c, a.currentOffset(), a.currentPosition()),
        c
      );
    },
  };
}
function Wc(e) {
  if (14 === e.type) return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function jc(e, t) {
  for (let n = 0; n < e.length; n++) Vc(e[n], t);
}
function Vc(e, t) {
  switch (e.type) {
    case 1:
      jc(e.cases, t), t.helper("plural");
      break;
    case 2:
      jc(e.items, t);
      break;
    case 6:
      Vc(e.key, t), t.helper("linked"), t.helper("type");
      break;
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
  }
}
function Hc(e, t = {}) {
  const n = (function (e, t = {}) {
    const n = { ast: e, helpers: new Set() };
    return { context: () => n, helper: (e) => (n.helpers.add(e), e) };
  })(e);
  n.helper("normalize"), e.body && Vc(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function Bc(e) {
  if (1 === e.items.length) {
    const t = e.items[0];
    (3 !== t.type && 9 !== t.type) || ((e.static = t.value), delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (3 !== r.type && 9 !== r.type) break;
      if (null == r.value) break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = bc(t);
      for (let t = 0; t < e.items.length; t++) {
        const n = e.items[t];
        (3 !== n.type && 9 !== n.type) || delete n.value;
      }
    }
  }
}
const Gc = "minifier";
function Yc(e) {
  switch (((e.t = e.type), e.type)) {
    case 0:
      const t = e;
      Yc(t.body), (t.b = t.body), delete t.body;
      break;
    case 1:
      const n = e,
        r = n.cases;
      for (let e = 0; e < r.length; e++) Yc(r[e]);
      (n.c = r), delete n.cases;
      break;
    case 2:
      const o = e,
        s = o.items;
      for (let e = 0; e < s.length; e++) Yc(s[e]);
      (o.i = s),
        delete o.items,
        o.static && ((o.s = o.static), delete o.static);
      break;
    case 3:
    case 9:
    case 8:
    case 7:
      const a = e;
      a.value && ((a.v = a.value), delete a.value);
      break;
    case 6:
      const l = e;
      Yc(l.key),
        (l.k = l.key),
        delete l.key,
        l.modifier && (Yc(l.modifier), (l.m = l.modifier), delete l.modifier);
      break;
    case 5:
      const c = e;
      (c.i = c.index), delete c.index;
      break;
    case 4:
      const i = e;
      (i.k = i.key), delete i.key;
      break;
    default:
      throw Lc(Ec.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: Gc,
        args: [e.type],
      });
  }
  delete e.type;
}
const Xc = "parser";
function Kc(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      !(function (e, t) {
        t.body ? Kc(e, t.body) : e.push("null");
      })(e, t);
      break;
    case 1:
      !(function (e, t) {
        const { helper: n, needIndent: r } = e;
        if (t.cases.length > 1) {
          e.push(`${n("plural")}([`), e.indent(r());
          const o = t.cases.length;
          for (let n = 0; n < o && (Kc(e, t.cases[n]), n !== o - 1); n++)
            e.push(", ");
          e.deindent(r()), e.push("])");
        }
      })(e, t);
      break;
    case 2:
      !(function (e, t) {
        const { helper: n, needIndent: r } = e;
        e.push(`${n("normalize")}([`), e.indent(r());
        const o = t.items.length;
        for (let s = 0; s < o && (Kc(e, t.items[s]), s !== o - 1); s++)
          e.push(", ");
        e.deindent(r()), e.push("])");
      })(e, t);
      break;
    case 6:
      !(function (e, t) {
        const { helper: n } = e;
        e.push(`${n("linked")}(`),
          Kc(e, t.key),
          t.modifier
            ? (e.push(", "), Kc(e, t.modifier), e.push(", _type"))
            : e.push(", undefined, _type"),
          e.push(")");
      })(e, t);
      break;
    case 8:
    case 7:
    case 9:
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    default:
      throw Lc(Ec.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: Xc,
        args: [t.type],
      });
  }
}
const zc = (e, t = {}) => {
  const n = vc(t.mode) ? t.mode : "normal",
    r = vc(t.filename) ? t.filename : "message.intl",
    o = !!t.sourceMap,
    s = null != t.breakLineCode ? t.breakLineCode : "arrow" === n ? ";" : "\n",
    a = t.needIndent ? t.needIndent : "arrow" !== n,
    l = e.helpers || [],
    c = (function (e, t) {
      const { sourceMap: n, filename: r, breakLineCode: o, needIndent: s } = t,
        a = !1 !== t.location,
        l = {
          filename: r,
          code: "",
          column: 1,
          line: 1,
          offset: 0,
          map: void 0,
          breakLineCode: o,
          needIndent: s,
          indentLevel: 0,
        };
      function c(e, t) {
        l.code += e;
      }
      function i(e, t = !0) {
        const n = t ? o : "";
        c(s ? n + "  ".repeat(e) : n);
      }
      return (
        a && e.loc && (l.source = e.loc.source),
        {
          context: () => l,
          push: c,
          indent: function (e = !0) {
            const t = ++l.indentLevel;
            e && i(t);
          },
          deindent: function (e = !0) {
            const t = --l.indentLevel;
            e && i(t);
          },
          newline: function () {
            i(l.indentLevel);
          },
          helper: (e) => `_${e}`,
          needIndent: () => l.needIndent,
        }
      );
    })(e, {
      mode: n,
      filename: r,
      sourceMap: o,
      breakLineCode: s,
      needIndent: a,
    });
  c.push("normal" === n ? "function __msg__ (ctx) {" : "(ctx) => {"),
    c.indent(a),
    l.length > 0 &&
    (c.push(
      `const { ${bc(
        l.map((e) => `${e}: _${e}`),
        ", "
      )} } = ctx`
    ),
      c.newline()),
    c.push("return "),
    Kc(c, e),
    c.deindent(a),
    c.push("}"),
    delete e.helpers;
  const { code: i, map: u } = c.context();
  return { ast: e, code: i, map: u ? u.toJSON() : void 0 };
};
function qc(e, t = {}) {
  const n = gc({}, t),
    r = !!n.jit,
    o = !!n.minify,
    s = null == n.optimize || n.optimize,
    a = $c(n).parse(e);
  return r
    ? (s &&
      (function (e) {
        const t = e.body;
        2 === t.type ? Bc(t) : t.cases.forEach((e) => Bc(e));
      })(a),
      o && Yc(a),
      { ast: a, code: "" })
    : (Hc(a, n), zc(a, n));
}
/*!
 * core-base v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */ const Jc = [];
(Jc[0] = { w: [0], i: [3, 0], "[": [4], o: [7] }),
  (Jc[1] = { w: [1], ".": [2], "[": [4], o: [7] }),
  (Jc[2] = { w: [2], i: [3, 0], 0: [3, 0] }),
  (Jc[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1],
  }),
  (Jc[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0],
  }),
  (Jc[5] = { "'": [4, 0], o: 8, l: [5, 0] }),
  (Jc[6] = { '"': [4, 0], o: 8, l: [6, 0] });
const Qc = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Zc(e) {
  if (null == e) return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function ei(e) {
  const t = e.trim();
  return (
    ("0" !== e.charAt(0) || !isNaN(parseInt(e))) &&
    ((n = t),
      Qc.test(n)
        ? (function (e) {
          const t = e.charCodeAt(0);
          return t !== e.charCodeAt(e.length - 1) || (34 !== t && 39 !== t)
            ? e
            : e.slice(1, -1);
        })(t)
        : "*" + t)
  );
  var n;
}
const ti = new Map();
function ni(e, t) {
  return ac(e) ? e[t] : null;
}
const ri = (e) => e,
  oi = (e) => "",
  si = "text",
  ai = (e) =>
    0 === e.length
      ? ""
      : (function (e, t = "") {
        return e.reduce((e, n, r) => (0 === r ? e + n : e + t + n), "");
      })(e),
  li = (e) =>
    null == e
      ? ""
      : nc(e) || (uc(e) && e.toString === cc)
        ? JSON.stringify(e, null, 2)
        : String(e);
function ci(e, t) {
  return (
    (e = Math.abs(e)),
    2 === t ? (e ? (e > 1 ? 1 : 0) : 1) : e ? Math.min(e, 2) : 0
  );
}
function ii(e = {}) {
  const t = e.locale,
    n = (function (e) {
      const t = Yl(e.pluralIndex) ? e.pluralIndex : -1;
      return e.named && (Yl(e.named.count) || Yl(e.named.n))
        ? Yl(e.named.count)
          ? e.named.count
          : Yl(e.named.n)
            ? e.named.n
            : t
        : t;
    })(e),
    r =
      ac(e.pluralRules) && oc(t) && rc(e.pluralRules[t])
        ? e.pluralRules[t]
        : ci,
    o = ac(e.pluralRules) && oc(t) && rc(e.pluralRules[t]) ? ci : void 0,
    s = e.list || [],
    a = e.named || {};
  Yl(e.pluralIndex) &&
    (function (e, t) {
      t.count || (t.count = e), t.n || (t.n = e);
    })(n, a);
  function l(t) {
    const n = rc(e.messages)
      ? e.messages(t)
      : !!ac(e.messages) && e.messages[t];
    return n || (e.parent ? e.parent.message(t) : oi);
  }
  const c =
    uc(e.processor) && rc(e.processor.normalize) ? e.processor.normalize : ai,
    i =
      uc(e.processor) && rc(e.processor.interpolate)
        ? e.processor.interpolate
        : li,
    u = {
      list: (e) => s[e],
      named: (e) => a[e],
      plural: (e) => e[r(n, e.length, o)],
      linked: (t, ...n) => {
        const [r, o] = n;
        let s = "text",
          a = "";
        1 === n.length
          ? ac(r)
            ? ((a = r.modifier || a), (s = r.type || s))
            : oc(r) && (a = r || a)
          : 2 === n.length && (oc(r) && (a = r || a), oc(o) && (s = o || s));
        const c = l(t)(u),
          i = "vnode" === s && nc(c) && a ? c[0] : c;
        return a ? ((f = a), e.modifiers ? e.modifiers[f] : ri)(i, s) : i;
        var f;
      },
      message: l,
      type: uc(e.processor) && oc(e.processor.type) ? e.processor.type : si,
      interpolate: i,
      normalize: c,
      values: ql({}, s, a),
    };
  return u;
}
const ui = Ec.__EXTEND_POINT__,
  fi = fc(ui),
  pi = {
    INVALID_ARGUMENT: ui,
    INVALID_DATE_ARGUMENT: fi(),
    INVALID_ISO_DATE_ARGUMENT: fi(),
    NOT_SUPPORT_NON_STRING_MESSAGE: fi(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: fi(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: fi(),
    NOT_SUPPORT_LOCALE_TYPE: fi(),
    __EXTEND_POINT__: fi(),
  };
function di(e) {
  return Lc(e, null, void 0);
}
function mi(e, t) {
  return null != t.locale ? _i(t.locale) : _i(e.locale);
}
let hi;
function _i(e) {
  if (oc(e)) return e;
  if (rc(e)) {
    if (e.resolvedOnce && null != hi) return hi;
    if ("Function" === e.constructor.name) {
      const t = e();
      if (lc(t)) throw di(pi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return (hi = t);
    }
    throw di(pi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  }
  throw di(pi.NOT_SUPPORT_LOCALE_TYPE);
}
function gi(e, t, n) {
  return [
    ...new Set([
      n,
      ...(nc(t) ? t : ac(t) ? Object.keys(t) : oc(t) ? [t] : [n]),
    ]),
  ];
}
function vi(e, t, n) {
  const r = oc(n) ? n : Ci,
    o = e;
  o.__localeChainCache || (o.__localeChainCache = new Map());
  let s = o.__localeChainCache.get(r);
  if (!s) {
    s = [];
    let e = [n];
    for (; nc(e);) e = yi(s, e, t);
    const a = nc(t) || !uc(t) ? t : t.default ? t.default : null;
    (e = oc(a) ? [a] : a),
      nc(e) && yi(s, e, !1),
      o.__localeChainCache.set(r, s);
  }
  return s;
}
function yi(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && sc(r); o++) {
    const s = t[o];
    oc(s) && (r = bi(e, t[o], n));
  }
  return r;
}
function bi(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    (r = Ei(e, o.join("-"), n)), o.splice(-1, 1);
  } while (o.length && !0 === r);
  return r;
}
function Ei(e, t, n) {
  let r = !1;
  if (!e.includes(t) && ((r = !0), t)) {
    r = "!" !== t[t.length - 1];
    const o = t.replace(/!/g, "");
    e.push(o), (nc(n) || uc(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const ki = "9.8.0",
  Li = -1,
  Ci = "en-US",
  Ni = "",
  Ti = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
let Oi, Si, Ii;
function wi(e) {
  Oi = e;
}
let Ai = null;
const Pi = (e) => {
  Ai = e;
},
  xi = () => Ai;
let Ri = 0;
function Fi(e = {}) {
  const t = rc(e.onWarn) ? e.onWarn : pc,
    n = oc(e.version) ? e.version : ki,
    r = oc(e.locale) || rc(e.locale) ? e.locale : Ci,
    o = rc(r) ? Ci : r,
    s =
      nc(e.fallbackLocale) ||
        uc(e.fallbackLocale) ||
        oc(e.fallbackLocale) ||
        !1 === e.fallbackLocale
        ? e.fallbackLocale
        : o,
    a = uc(e.messages) ? e.messages : { [o]: {} },
    l = uc(e.datetimeFormats) ? e.datetimeFormats : { [o]: {} },
    c = uc(e.numberFormats) ? e.numberFormats : { [o]: {} },
    i = ql({}, e.modifiers || {}, {
      upper: (e, t) =>
        "text" === t && oc(e)
          ? e.toUpperCase()
          : "vnode" === t && ac(e) && "__v_isVNode" in e
            ? e.children.toUpperCase()
            : e,
      lower: (e, t) =>
        "text" === t && oc(e)
          ? e.toLowerCase()
          : "vnode" === t && ac(e) && "__v_isVNode" in e
            ? e.children.toLowerCase()
            : e,
      capitalize: (e, t) =>
        "text" === t && oc(e)
          ? Ti(e)
          : "vnode" === t && ac(e) && "__v_isVNode" in e
            ? Ti(e.children)
            : e,
    }),
    u = e.pluralRules || {},
    f = rc(e.missing) ? e.missing : null,
    p = (!sc(e.missingWarn) && !Kl(e.missingWarn)) || e.missingWarn,
    d = (!sc(e.fallbackWarn) && !Kl(e.fallbackWarn)) || e.fallbackWarn,
    m = !!e.fallbackFormat,
    h = !!e.unresolving,
    _ = rc(e.postTranslation) ? e.postTranslation : null,
    g = uc(e.processor) ? e.processor : null,
    v = !sc(e.warnHtmlMessage) || e.warnHtmlMessage,
    y = !!e.escapeParameter,
    b = rc(e.messageCompiler) ? e.messageCompiler : Oi,
    E = rc(e.messageResolver) ? e.messageResolver : Si || ni,
    k = rc(e.localeFallbacker) ? e.localeFallbacker : Ii || gi,
    L = ac(e.fallbackContext) ? e.fallbackContext : void 0,
    C = e,
    N = ac(C.__datetimeFormatters) ? C.__datetimeFormatters : new Map(),
    T = ac(C.__numberFormatters) ? C.__numberFormatters : new Map(),
    O = ac(C.__meta) ? C.__meta : {};
  Ri++;
  const S = {
    version: n,
    cid: Ri,
    locale: r,
    fallbackLocale: s,
    messages: a,
    modifiers: i,
    pluralRules: u,
    missing: f,
    missingWarn: p,
    fallbackWarn: d,
    fallbackFormat: m,
    unresolving: h,
    postTranslation: _,
    processor: g,
    warnHtmlMessage: v,
    escapeParameter: y,
    messageCompiler: b,
    messageResolver: E,
    localeFallbacker: k,
    fallbackContext: L,
    onWarn: t,
    __meta: O,
  };
  return (
    (S.datetimeFormats = l),
    (S.numberFormats = c),
    (S.__datetimeFormatters = N),
    (S.__numberFormatters = T),
    S
  );
}
function Mi(e, t, n, r, o) {
  const { missing: s, onWarn: a } = e;
  if (null !== s) {
    const r = s(e, n, t, o);
    return oc(r) ? r : t;
  }
  return t;
}
function Di(e, t, n) {
  (e.__localeChainCache = new Map()), e.localeFallbacker(e, n, t);
}
function Ui(e) {
  return (t) =>
    (function (e, t) {
      const n = t.b || t.body;
      if (1 === (n.t || n.type)) {
        const t = n,
          r = t.c || t.cases;
        return e.plural(r.reduce((t, n) => [...t, $i(e, n)], []));
      }
      return $i(e, n);
    })(t, e);
}
function $i(e, t) {
  const n = t.s || t.static;
  if (n) return "text" === e.type ? n : e.normalize([n]);
  {
    const n = (t.i || t.items).reduce((t, n) => [...t, Wi(e, n)], []);
    return e.normalize(n);
  }
}
function Wi(e, t) {
  const n = t.t || t.type;
  switch (n) {
    case 3:
      const r = t;
      return r.v || r.value;
    case 9:
      const o = t;
      return o.v || o.value;
    case 4:
      const s = t;
      return e.interpolate(e.named(s.k || s.key));
    case 5:
      const a = t;
      return e.interpolate(e.list(null != a.i ? a.i : a.index));
    case 6:
      const l = t,
        c = l.m || l.modifier;
      return e.linked(Wi(e, l.k || l.key), c ? Wi(e, c) : void 0, e.type);
    case 7:
      const i = t;
      return i.v || i.value;
    case 8:
      const u = t;
      return u.v || u.value;
    default:
      throw new Error(`unhandled node type on format message part: ${n}`);
  }
}
const ji = (e) => e;
let Vi = Object.create(null);
const Hi = (e) =>
  ac(e) && (0 === e.t || 0 === e.type) && ("b" in e || "body" in e);
function Bi(e, t = {}) {
  let n = !1;
  const r = t.onError || Cc;
  return (
    (t.onError = (e) => {
      (n = !0), r(e);
    }),
    { ...qc(e, t), detectError: n }
  );
}
const Gi = (e, t) => {
  if (!oc(e)) throw di(pi.NOT_SUPPORT_NON_STRING_MESSAGE);
  {
    !sc(t.warnHtmlMessage) || t.warnHtmlMessage;
    const n = (t.onCacheKey || ji)(e),
      r = Vi[n];
    if (r) return r;
    const { code: o, detectError: s } = Bi(e, t),
      a = new Function(`return ${o}`)();
    return s ? a : (Vi[n] = a);
  }
};
const Yi = () => "",
  Xi = (e) => rc(e);
function Ki(e, ...t) {
  const {
    fallbackFormat: n,
    postTranslation: r,
    unresolving: o,
    messageCompiler: s,
    fallbackLocale: a,
    messages: l,
  } = e,
    [c, i] = Ji(...t),
    u = sc(i.missingWarn) ? i.missingWarn : e.missingWarn,
    f = sc(i.fallbackWarn) ? i.fallbackWarn : e.fallbackWarn,
    p = sc(i.escapeParameter) ? i.escapeParameter : e.escapeParameter,
    d = !!i.resolvedMessage,
    m =
      oc(i.default) || sc(i.default)
        ? sc(i.default)
          ? s
            ? c
            : () => c
          : i.default
        : n
          ? s
            ? c
            : () => c
          : "",
    h = n || "" !== m,
    _ = mi(e, i);
  p &&
    (function (e) {
      nc(e.list)
        ? (e.list = e.list.map((e) => (oc(e) ? Zl(e) : e)))
        : ac(e.named) &&
        Object.keys(e.named).forEach((t) => {
          oc(e.named[t]) && (e.named[t] = Zl(e.named[t]));
        });
    })(i);
  let [g, v, y] = d ? [c, _, l[_] || {}] : zi(e, c, _, a, f, u),
    b = g,
    E = c;
  if (
    (d || oc(b) || Hi(b) || Xi(b) || (h && ((b = m), (E = b))),
      !(d || ((oc(b) || Hi(b) || Xi(b)) && oc(v))))
  )
    return o ? Li : c;
  let k = !1;
  const L = Xi(b)
    ? b
    : qi(e, c, v, b, E, () => {
      k = !0;
    });
  if (k) return b;
  const C = (function (e, t, n, r) {
    const {
      modifiers: o,
      pluralRules: s,
      messageResolver: a,
      fallbackLocale: l,
      fallbackWarn: c,
      missingWarn: i,
      fallbackContext: u,
    } = e,
      f = (r) => {
        let o = a(n, r);
        if (null == o && u) {
          const [, , e] = zi(u, r, t, l, c, i);
          o = a(e, r);
        }
        if (oc(o) || Hi(o)) {
          let n = !1;
          const s = qi(e, r, t, o, r, () => {
            n = !0;
          });
          return n ? Yi : s;
        }
        return Xi(o) ? o : Yi;
      },
      p = { locale: t, modifiers: o, pluralRules: s, messages: f };
    e.processor && (p.processor = e.processor);
    r.list && (p.list = r.list);
    r.named && (p.named = r.named);
    Yl(r.plural) && (p.pluralIndex = r.plural);
    return p;
  })(e, v, y, i),
    N = (function (e, t, n) {
      const r = t(n);
      return r;
    })(0, L, ii(C));
  return r ? r(N, c) : N;
}
function zi(e, t, n, r, o, s) {
  const { messages: a, onWarn: l, messageResolver: c, localeFallbacker: i } = e,
    u = i(e, r, n);
  let f,
    p = {},
    d = null;
  for (
    let m = 0;
    m < u.length &&
    ((f = u[m]),
      (p = a[f] || {}),
      null === (d = c(p, t)) && (d = p[t]),
      !(oc(d) || Hi(d) || Xi(d)));
    m++
  ) {
    const n = Mi(e, t, f, 0, "translate");
    n !== t && (d = n);
  }
  return [d, f, p];
}
function qi(e, t, n, r, o, s) {
  const { messageCompiler: a, warnHtmlMessage: l } = e;
  if (Xi(r)) {
    const e = r;
    return (e.locale = e.locale || n), (e.key = e.key || t), e;
  }
  if (null == a) {
    const e = () => r;
    return (e.locale = n), (e.key = t), e;
  }
  const c = a(
    r,
    (function (e, t, n, r, o, s) {
      return {
        locale: t,
        key: n,
        warnHtmlMessage: o,
        onError: (e) => {
          throw (s && s(e), e);
        },
        onCacheKey: (e) => Bl(t, n, e),
      };
    })(0, n, o, 0, l, s)
  );
  return (c.locale = n), (c.key = t), (c.source = r), c;
}
function Ji(...e) {
  const [t, n, r] = e,
    o = {};
  if (!(oc(t) || Yl(t) || Xi(t) || Hi(t))) throw di(pi.INVALID_ARGUMENT);
  const s = Yl(t) ? String(t) : (Xi(t), t);
  return (
    Yl(n)
      ? (o.plural = n)
      : oc(n)
        ? (o.default = n)
        : uc(n) && !zl(n)
          ? (o.named = n)
          : nc(n) && (o.list = n),
    Yl(r) ? (o.plural = r) : oc(r) ? (o.default = r) : uc(r) && ql(o, r),
    [s, o]
  );
}
function Qi(e, ...t) {
  const {
    datetimeFormats: n,
    unresolving: r,
    fallbackLocale: o,
    onWarn: s,
    localeFallbacker: a,
  } = e,
    { __datetimeFormatters: l } = e,
    [c, i, u, f] = eu(...t);
  sc(u.missingWarn) ? u.missingWarn : e.missingWarn;
  sc(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const p = !!u.part,
    d = mi(e, u),
    m = a(e, o, d);
  if (!oc(c) || "" === c) return new Intl.DateTimeFormat(d, f).format(i);
  let h,
    _ = {},
    g = null;
  for (
    let b = 0;
    b < m.length && ((h = m[b]), (_ = n[h] || {}), (g = _[c]), !uc(g));
    b++
  )
    Mi(e, c, h, 0, "datetime format");
  if (!uc(g) || !oc(h)) return r ? Li : c;
  let v = `${h}__${c}`;
  zl(f) || (v = `${v}__${JSON.stringify(f)}`);
  let y = l.get(v);
  return (
    y || ((y = new Intl.DateTimeFormat(h, ql({}, g, f))), l.set(v, y)),
    p ? y.formatToParts(i) : y.format(i)
  );
}
const Zi = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits",
];
function eu(...e) {
  const [t, n, r, o] = e,
    s = {};
  let a,
    l = {};
  if (oc(t)) {
    const e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!e) throw di(pi.INVALID_ISO_DATE_ARGUMENT);
    const n = e[3]
      ? e[3].trim().startsWith("T")
        ? `${e[1].trim()}${e[3].trim()}`
        : `${e[1].trim()}T${e[3].trim()}`
      : e[1].trim();
    a = new Date(n);
    try {
      a.toISOString();
    } catch (c) {
      throw di(pi.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Xl(t)) {
    if (isNaN(t.getTime())) throw di(pi.INVALID_DATE_ARGUMENT);
    a = t;
  } else {
    if (!Yl(t)) throw di(pi.INVALID_ARGUMENT);
    a = t;
  }
  return (
    oc(n)
      ? (s.key = n)
      : uc(n) &&
      Object.keys(n).forEach((e) => {
        Zi.includes(e) ? (l[e] = n[e]) : (s[e] = n[e]);
      }),
    oc(r) ? (s.locale = r) : uc(r) && (l = r),
    uc(o) && (l = o),
    [s.key || "", a, s, l]
  );
}
function tu(e, t, n) {
  const r = e;
  for (const o in n) {
    const e = `${t}__${o}`;
    r.__datetimeFormatters.has(e) && r.__datetimeFormatters.delete(e);
  }
}
function nu(e, ...t) {
  const {
    numberFormats: n,
    unresolving: r,
    fallbackLocale: o,
    onWarn: s,
    localeFallbacker: a,
  } = e,
    { __numberFormatters: l } = e,
    [c, i, u, f] = ou(...t);
  sc(u.missingWarn) ? u.missingWarn : e.missingWarn;
  sc(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
  const p = !!u.part,
    d = mi(e, u),
    m = a(e, o, d);
  if (!oc(c) || "" === c) return new Intl.NumberFormat(d, f).format(i);
  let h,
    _ = {},
    g = null;
  for (
    let b = 0;
    b < m.length && ((h = m[b]), (_ = n[h] || {}), (g = _[c]), !uc(g));
    b++
  )
    Mi(e, c, h, 0, "number format");
  if (!uc(g) || !oc(h)) return r ? Li : c;
  let v = `${h}__${c}`;
  zl(f) || (v = `${v}__${JSON.stringify(f)}`);
  let y = l.get(v);
  return (
    y || ((y = new Intl.NumberFormat(h, ql({}, g, f))), l.set(v, y)),
    p ? y.formatToParts(i) : y.format(i)
  );
}
const ru = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay",
];
function ou(...e) {
  const [t, n, r, o] = e,
    s = {};
  let a = {};
  if (!Yl(t)) throw di(pi.INVALID_ARGUMENT);
  const l = t;
  return (
    oc(n)
      ? (s.key = n)
      : uc(n) &&
      Object.keys(n).forEach((e) => {
        ru.includes(e) ? (a[e] = n[e]) : (s[e] = n[e]);
      }),
    oc(r) ? (s.locale = r) : uc(r) && (a = r),
    uc(o) && (a = o),
    [s.key || "", l, s, a]
  );
}
function su(e, t, n) {
  const r = e;
  for (const o in n) {
    const e = `${t}__${o}`;
    r.__numberFormatters.has(e) && r.__numberFormatters.delete(e);
  }
}
"boolean" != typeof __INTLIFY_JIT_COMPILATION__ &&
  (Ql().__INTLIFY_JIT_COMPILATION__ = !1),
  "boolean" != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ &&
  (Ql().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
/*!
 * vue-i18n v9.8.0
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const au = "9.8.0";
const lu = fc(8);
lu(), lu(), lu(), lu(), lu(), lu(), lu(), lu();
const cu = pi.__EXTEND_POINT__,
  iu = fc(cu),
  uu = {
    UNEXPECTED_RETURN_TYPE: cu,
    INVALID_ARGUMENT: iu(),
    MUST_BE_CALL_SETUP_TOP: iu(),
    NOT_INSTALLED: iu(),
    NOT_AVAILABLE_IN_LEGACY_MODE: iu(),
    REQUIRED_VALUE: iu(),
    INVALID_VALUE: iu(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: iu(),
    NOT_INSTALLED_WITH_PROVIDE: iu(),
    UNEXPECTED_ERROR: iu(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: iu(),
    BRIDGE_SUPPORT_VUE_2_ONLY: iu(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: iu(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: iu(),
    __EXTEND_POINT__: iu(),
  };
function fu(e, ...t) {
  return Lc(e, null, void 0);
}
const pu = Hl("__translateVNode"),
  du = Hl("__datetimeParts"),
  mu = Hl("__numberParts"),
  hu = Hl("__setPluralRules"),
  _u = Hl("__injectWithOption"),
  gu = Hl("__dispose");
function vu(e) {
  if (!ac(e)) return e;
  for (const t in e)
    if (tc(e, t))
      if (t.includes(".")) {
        const n = t.split("."),
          r = n.length - 1;
        let o = e,
          s = !1;
        for (let e = 0; e < r; e++) {
          if ((n[e] in o || (o[n[e]] = {}), !ac(o[n[e]]))) {
            s = !0;
            break;
          }
          o = o[n[e]];
        }
        s || ((o[n[r]] = e[t]), delete e[t]), ac(o[n[r]]) && vu(o[n[r]]);
      } else ac(e[t]) && vu(e[t]);
  return e;
}
function yu(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: s } = t,
    a = uc(n) ? n : nc(r) ? {} : { [e]: {} };
  if (
    (nc(r) &&
      r.forEach((e) => {
        if ("locale" in e && "resource" in e) {
          const { locale: t, resource: n } = e;
          t ? ((a[t] = a[t] || {}), mc(n, a[t])) : mc(n, a);
        } else oc(e) && mc(JSON.parse(e), a);
      }),
      null == o && s)
  )
    for (const l in a) tc(a, l) && vu(a[l]);
  return a;
}
function bu(e) {
  return e.type;
}
function Eu(e, t, n) {
  let r = ac(t.messages) ? t.messages : {};
  "__i18nGlobal" in n &&
    (r = yu(e.locale.value, { messages: r, __i18n: n.__i18nGlobal }));
  const o = Object.keys(r);
  if (
    (o.length &&
      o.forEach((t) => {
        e.mergeLocaleMessage(t, r[t]);
      }),
      ac(t.datetimeFormats))
  ) {
    const n = Object.keys(t.datetimeFormats);
    n.length &&
      n.forEach((n) => {
        e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
      });
  }
  if (ac(t.numberFormats)) {
    const n = Object.keys(t.numberFormats);
    n.length &&
      n.forEach((n) => {
        e.mergeNumberFormat(n, t.numberFormats[n]);
      });
  }
}
function ku(e) {
  return Co(ao, null, e, 0);
}
const Lu = () => [],
  Cu = () => !1;
let Nu = 0;
function Tu(e) {
  return (t, n, r, o) => e(n, r, Do() || void 0, o);
}
function Ou(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e,
    o = void 0 === n,
    s = e.flatJson;
  let a = !sc(e.inheritLocale) || e.inheritLocale;
  const l = yt(n && a ? n.locale.value : oc(e.locale) ? e.locale : Ci),
    c = yt(
      n && a
        ? n.fallbackLocale.value
        : oc(e.fallbackLocale) ||
          nc(e.fallbackLocale) ||
          uc(e.fallbackLocale) ||
          !1 === e.fallbackLocale
          ? e.fallbackLocale
          : l.value
    ),
    i = yt(yu(l.value, e)),
    u = yt(uc(e.datetimeFormats) ? e.datetimeFormats : { [l.value]: {} }),
    f = yt(uc(e.numberFormats) ? e.numberFormats : { [l.value]: {} });
  let p = n
    ? n.missingWarn
    : (!sc(e.missingWarn) && !Kl(e.missingWarn)) || e.missingWarn,
    d = n
      ? n.fallbackWarn
      : (!sc(e.fallbackWarn) && !Kl(e.fallbackWarn)) || e.fallbackWarn,
    m = n ? n.fallbackRoot : !sc(e.fallbackRoot) || e.fallbackRoot,
    h = !!e.fallbackFormat,
    _ = rc(e.missing) ? e.missing : null,
    g = rc(e.missing) ? Tu(e.missing) : null,
    v = rc(e.postTranslation) ? e.postTranslation : null,
    y = n ? n.warnHtmlMessage : !sc(e.warnHtmlMessage) || e.warnHtmlMessage,
    b = !!e.escapeParameter;
  const E = n ? n.modifiers : uc(e.modifiers) ? e.modifiers : {};
  let k,
    L = e.pluralRules || (n && n.pluralRules);
  (k = (() => {
    o && Pi(null);
    const t = {
      version: au,
      locale: l.value,
      fallbackLocale: c.value,
      messages: i.value,
      modifiers: E,
      pluralRules: L,
      missing: null === g ? void 0 : g,
      missingWarn: p,
      fallbackWarn: d,
      fallbackFormat: h,
      unresolving: !0,
      postTranslation: null === v ? void 0 : v,
      warnHtmlMessage: y,
      escapeParameter: b,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" },
    };
    (t.datetimeFormats = u.value),
      (t.numberFormats = f.value),
      (t.__datetimeFormatters = uc(k) ? k.__datetimeFormatters : void 0),
      (t.__numberFormatters = uc(k) ? k.__numberFormatters : void 0);
    const n = Fi(t);
    return o && Pi(n), n;
  })()),
    Di(k, l.value, c.value);
  const C = qo({
    get: () => l.value,
    set: (e) => {
      (l.value = e), (k.locale = l.value);
    },
  }),
    N = qo({
      get: () => c.value,
      set: (e) => {
        (c.value = e), (k.fallbackLocale = c.value), Di(k, l.value, e);
      },
    }),
    T = qo(() => i.value),
    O = qo(() => u.value),
    S = qo(() => f.value);
  const I = (e, t, r, s, a, p) => {
    let d;
    l.value, c.value, i.value, u.value, f.value;
    try {
      0, o || (k.fallbackContext = n ? xi() : void 0), (d = e(k));
    } finally {
      o || (k.fallbackContext = void 0);
    }
    if (
      ("translate exists" !== r && Yl(d) && d === Li) ||
      ("translate exists" === r && !d)
    ) {
      const [e, r] = t();
      return n && m ? s(n) : a(e);
    }
    if (p(d)) return d;
    throw fu(uu.UNEXPECTED_RETURN_TYPE);
  };
  function w(...e) {
    return I(
      (t) => Reflect.apply(Ki, null, [t, ...e]),
      () => Ji(...e),
      "translate",
      (t) => Reflect.apply(t.t, t, [...e]),
      (e) => e,
      (e) => oc(e)
    );
  }
  const A = {
    normalize: function (e) {
      return e.map((e) => (oc(e) || Yl(e) || sc(e) ? ku(String(e)) : e));
    },
    interpolate: (e) => e,
    type: "vnode",
  };
  function P(e) {
    return i.value[e] || {};
  }
  Nu++,
    n &&
    Vl &&
    (En(n.locale, (e) => {
      a && ((l.value = e), (k.locale = e), Di(k, l.value, c.value));
    }),
      En(n.fallbackLocale, (e) => {
        a && ((c.value = e), (k.fallbackLocale = e), Di(k, l.value, c.value));
      }));
  const x = {
    id: Nu,
    locale: C,
    fallbackLocale: N,
    get inheritLocale() {
      return a;
    },
    set inheritLocale(e) {
      (a = e),
        e &&
        n &&
        ((l.value = n.locale.value),
          (c.value = n.fallbackLocale.value),
          Di(k, l.value, c.value));
    },
    get availableLocales() {
      return Object.keys(i.value).sort();
    },
    messages: T,
    get modifiers() {
      return E;
    },
    get pluralRules() {
      return L || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return p;
    },
    set missingWarn(e) {
      (p = e), (k.missingWarn = p);
    },
    get fallbackWarn() {
      return d;
    },
    set fallbackWarn(e) {
      (d = e), (k.fallbackWarn = d);
    },
    get fallbackRoot() {
      return m;
    },
    set fallbackRoot(e) {
      m = e;
    },
    get fallbackFormat() {
      return h;
    },
    set fallbackFormat(e) {
      (h = e), (k.fallbackFormat = h);
    },
    get warnHtmlMessage() {
      return y;
    },
    set warnHtmlMessage(e) {
      (y = e), (k.warnHtmlMessage = e);
    },
    get escapeParameter() {
      return b;
    },
    set escapeParameter(e) {
      (b = e), (k.escapeParameter = e);
    },
    t: w,
    getLocaleMessage: P,
    setLocaleMessage: function (e, t) {
      if (s) {
        const n = { [e]: t };
        for (const e in n) tc(n, e) && vu(n[e]);
        t = n[e];
      }
      (i.value[e] = t), (k.messages = i.value);
    },
    mergeLocaleMessage: function (e, t) {
      i.value[e] = i.value[e] || {};
      const n = { [e]: t };
      for (const r in n) tc(n, r) && vu(n[r]);
      mc((t = n[e]), i.value[e]), (k.messages = i.value);
    },
    getPostTranslationHandler: function () {
      return rc(v) ? v : null;
    },
    setPostTranslationHandler: function (e) {
      (v = e), (k.postTranslation = e);
    },
    getMissingHandler: function () {
      return _;
    },
    setMissingHandler: function (e) {
      null !== e && (g = Tu(e)), (_ = e), (k.missing = g);
    },
    [hu]: function (e) {
      (L = e), (k.pluralRules = L);
    },
  };
  return (
    (x.datetimeFormats = O),
    (x.numberFormats = S),
    (x.rt = function (...e) {
      const [t, n, r] = e;
      if (r && !ac(r)) throw fu(uu.INVALID_ARGUMENT);
      return w(t, n, ql({ resolvedMessage: !0 }, r || {}));
    }),
    (x.te = function (e, t) {
      return I(
        () => {
          if (!e) return !1;
          const n = P(oc(t) ? t : l.value),
            r = k.messageResolver(n, e);
          return Hi(r) || Xi(r) || oc(r);
        },
        () => [e],
        "translate exists",
        (n) => Reflect.apply(n.te, n, [e, t]),
        Cu,
        (e) => sc(e)
      );
    }),
    (x.tm = function (e) {
      const t = (function (e) {
        let t = null;
        const n = vi(k, c.value, l.value);
        for (let r = 0; r < n.length; r++) {
          const o = i.value[n[r]] || {},
            s = k.messageResolver(o, e);
          if (null != s) {
            t = s;
            break;
          }
        }
        return t;
      })(e);
      return null != t ? t : (n && n.tm(e)) || {};
    }),
    (x.d = function (...e) {
      return I(
        (t) => Reflect.apply(Qi, null, [t, ...e]),
        () => eu(...e),
        "datetime format",
        (t) => Reflect.apply(t.d, t, [...e]),
        () => Ni,
        (e) => oc(e)
      );
    }),
    (x.n = function (...e) {
      return I(
        (t) => Reflect.apply(nu, null, [t, ...e]),
        () => ou(...e),
        "number format",
        (t) => Reflect.apply(t.n, t, [...e]),
        () => Ni,
        (e) => oc(e)
      );
    }),
    (x.getDateTimeFormat = function (e) {
      return u.value[e] || {};
    }),
    (x.setDateTimeFormat = function (e, t) {
      (u.value[e] = t), (k.datetimeFormats = u.value), tu(k, e, t);
    }),
    (x.mergeDateTimeFormat = function (e, t) {
      (u.value[e] = ql(u.value[e] || {}, t)),
        (k.datetimeFormats = u.value),
        tu(k, e, t);
    }),
    (x.getNumberFormat = function (e) {
      return f.value[e] || {};
    }),
    (x.setNumberFormat = function (e, t) {
      (f.value[e] = t), (k.numberFormats = f.value), su(k, e, t);
    }),
    (x.mergeNumberFormat = function (e, t) {
      (f.value[e] = ql(f.value[e] || {}, t)),
        (k.numberFormats = f.value),
        su(k, e, t);
    }),
    (x[_u] = r),
    (x[pu] = function (...e) {
      return I(
        (t) => {
          let n;
          const r = t;
          try {
            (r.processor = A), (n = Reflect.apply(Ki, null, [r, ...e]));
          } finally {
            r.processor = null;
          }
          return n;
        },
        () => Ji(...e),
        "translate",
        (t) => t[pu](...e),
        (e) => [ku(e)],
        (e) => nc(e)
      );
    }),
    (x[du] = function (...e) {
      return I(
        (t) => Reflect.apply(Qi, null, [t, ...e]),
        () => eu(...e),
        "datetime format",
        (t) => t[du](...e),
        Lu,
        (e) => oc(e) || nc(e)
      );
    }),
    (x[mu] = function (...e) {
      return I(
        (t) => Reflect.apply(nu, null, [t, ...e]),
        () => ou(...e),
        "number format",
        (t) => t[mu](...e),
        Lu,
        (e) => oc(e) || nc(e)
      );
    }),
    x
  );
}
function Su(e = {}, t) {
  {
    const t = Ou(
      (function (e) {
        const t = oc(e.locale) ? e.locale : Ci,
          n =
            oc(e.fallbackLocale) ||
              nc(e.fallbackLocale) ||
              uc(e.fallbackLocale) ||
              !1 === e.fallbackLocale
              ? e.fallbackLocale
              : t,
          r = rc(e.missing) ? e.missing : void 0,
          o =
            (!sc(e.silentTranslationWarn) && !Kl(e.silentTranslationWarn)) ||
            !e.silentTranslationWarn,
          s =
            (!sc(e.silentFallbackWarn) && !Kl(e.silentFallbackWarn)) ||
            !e.silentFallbackWarn,
          a = !sc(e.fallbackRoot) || e.fallbackRoot,
          l = !!e.formatFallbackMessages,
          c = uc(e.modifiers) ? e.modifiers : {},
          i = e.pluralizationRules,
          u = rc(e.postTranslation) ? e.postTranslation : void 0,
          f = !oc(e.warnHtmlInMessage) || "off" !== e.warnHtmlInMessage,
          p = !!e.escapeParameterHtml,
          d = !sc(e.sync) || e.sync;
        let m = e.messages;
        if (uc(e.sharedMessages)) {
          const t = e.sharedMessages;
          m = Object.keys(t).reduce((e, n) => {
            const r = e[n] || (e[n] = {});
            return ql(r, t[n]), e;
          }, m || {});
        }
        const { __i18n: h, __root: _, __injectWithOption: g } = e,
          v = e.datetimeFormats,
          y = e.numberFormats;
        return {
          locale: t,
          fallbackLocale: n,
          messages: m,
          flatJson: e.flatJson,
          datetimeFormats: v,
          numberFormats: y,
          missing: r,
          missingWarn: o,
          fallbackWarn: s,
          fallbackRoot: a,
          fallbackFormat: l,
          modifiers: c,
          pluralRules: i,
          postTranslation: u,
          warnHtmlMessage: f,
          escapeParameter: p,
          messageResolver: e.messageResolver,
          inheritLocale: d,
          __i18n: h,
          __root: _,
          __injectWithOption: g,
        };
      })(e)
    ),
      { __extender: n } = e,
      r = {
        id: t.id,
        get locale() {
          return t.locale.value;
        },
        set locale(e) {
          t.locale.value = e;
        },
        get fallbackLocale() {
          return t.fallbackLocale.value;
        },
        set fallbackLocale(e) {
          t.fallbackLocale.value = e;
        },
        get messages() {
          return t.messages.value;
        },
        get datetimeFormats() {
          return t.datetimeFormats.value;
        },
        get numberFormats() {
          return t.numberFormats.value;
        },
        get availableLocales() {
          return t.availableLocales;
        },
        get formatter() {
          return { interpolate: () => [] };
        },
        set formatter(e) { },
        get missing() {
          return t.getMissingHandler();
        },
        set missing(e) {
          t.setMissingHandler(e);
        },
        get silentTranslationWarn() {
          return sc(t.missingWarn) ? !t.missingWarn : t.missingWarn;
        },
        set silentTranslationWarn(e) {
          t.missingWarn = sc(e) ? !e : e;
        },
        get silentFallbackWarn() {
          return sc(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
        },
        set silentFallbackWarn(e) {
          t.fallbackWarn = sc(e) ? !e : e;
        },
        get modifiers() {
          return t.modifiers;
        },
        get formatFallbackMessages() {
          return t.fallbackFormat;
        },
        set formatFallbackMessages(e) {
          t.fallbackFormat = e;
        },
        get postTranslation() {
          return t.getPostTranslationHandler();
        },
        set postTranslation(e) {
          t.setPostTranslationHandler(e);
        },
        get sync() {
          return t.inheritLocale;
        },
        set sync(e) {
          t.inheritLocale = e;
        },
        get warnHtmlInMessage() {
          return t.warnHtmlMessage ? "warn" : "off";
        },
        set warnHtmlInMessage(e) {
          t.warnHtmlMessage = "off" !== e;
        },
        get escapeParameterHtml() {
          return t.escapeParameter;
        },
        set escapeParameterHtml(e) {
          t.escapeParameter = e;
        },
        get preserveDirectiveContent() {
          return !0;
        },
        set preserveDirectiveContent(e) { },
        get pluralizationRules() {
          return t.pluralRules || {};
        },
        __composer: t,
        t(...e) {
          const [n, r, o] = e,
            s = {};
          let a = null,
            l = null;
          if (!oc(n)) throw fu(uu.INVALID_ARGUMENT);
          const c = n;
          return (
            oc(r) ? (s.locale = r) : nc(r) ? (a = r) : uc(r) && (l = r),
            nc(o) ? (a = o) : uc(o) && (l = o),
            Reflect.apply(t.t, t, [c, a || l || {}, s])
          );
        },
        rt: (...e) => Reflect.apply(t.rt, t, [...e]),
        tc(...e) {
          const [n, r, o] = e,
            s = { plural: 1 };
          let a = null,
            l = null;
          if (!oc(n)) throw fu(uu.INVALID_ARGUMENT);
          const c = n;
          return (
            oc(r)
              ? (s.locale = r)
              : Yl(r)
                ? (s.plural = r)
                : nc(r)
                  ? (a = r)
                  : uc(r) && (l = r),
            oc(o) ? (s.locale = o) : nc(o) ? (a = o) : uc(o) && (l = o),
            Reflect.apply(t.t, t, [c, a || l || {}, s])
          );
        },
        te: (e, n) => t.te(e, n),
        tm: (e) => t.tm(e),
        getLocaleMessage: (e) => t.getLocaleMessage(e),
        setLocaleMessage(e, n) {
          t.setLocaleMessage(e, n);
        },
        mergeLocaleMessage(e, n) {
          t.mergeLocaleMessage(e, n);
        },
        d: (...e) => Reflect.apply(t.d, t, [...e]),
        getDateTimeFormat: (e) => t.getDateTimeFormat(e),
        setDateTimeFormat(e, n) {
          t.setDateTimeFormat(e, n);
        },
        mergeDateTimeFormat(e, n) {
          t.mergeDateTimeFormat(e, n);
        },
        n: (...e) => Reflect.apply(t.n, t, [...e]),
        getNumberFormat: (e) => t.getNumberFormat(e),
        setNumberFormat(e, n) {
          t.setNumberFormat(e, n);
        },
        mergeNumberFormat(e, n) {
          t.mergeNumberFormat(e, n);
        },
        getChoiceIndex: (e, t) => -1,
      };
    return (r.__extender = n), r;
  }
}
const Iu = {
  tag: { type: [String, Object] },
  locale: { type: String },
  scope: {
    type: String,
    validator: (e) => "parent" === e || "global" === e,
    default: "parent",
  },
  i18n: { type: Object },
};
function wu(e) {
  return so;
}
const Au = $n({
  name: "i18n-t",
  props: ql(
    {
      keypath: { type: String, required: !0 },
      plural: { type: [Number, String], validator: (e) => Yl(e) || !isNaN(e) },
    },
    Iu
  ),
  setup(e, t) {
    const { slots: n, attrs: r } = t,
      o = e.i18n || Wu({ useScope: e.scope, __useComponent: !0 });
    return () => {
      const s = Object.keys(n).filter((e) => "_" !== e),
        a = {};
      e.locale && (a.locale = e.locale),
        void 0 !== e.plural && (a.plural = oc(e.plural) ? +e.plural : e.plural);
      const l = (function ({ slots: e }, t) {
        if (1 === t.length && "default" === t[0])
          return (e.default ? e.default() : []).reduce(
            (e, t) => [...e, ...(t.type === so ? t.children : [t])],
            []
          );
        return t.reduce((t, n) => {
          const r = e[n];
          return r && (t[n] = r()), t;
        }, {});
      })(t, s),
        c = o[pu](e.keypath, l, a),
        i = ql({}, r);
      return Jo(oc(e.tag) || ac(e.tag) ? e.tag : wu(), i, c);
    };
  },
});
function Pu(e, t, n, r) {
  const { slots: o, attrs: s } = t;
  return () => {
    const t = { part: !0 };
    let a = {};
    e.locale && (t.locale = e.locale),
      oc(e.format)
        ? (t.key = e.format)
        : ac(e.format) &&
        (oc(e.format.key) && (t.key = e.format.key),
          (a = Object.keys(e.format).reduce(
            (t, r) => (n.includes(r) ? ql({}, t, { [r]: e.format[r] }) : t),
            {}
          )));
    const l = r(e.value, t, a);
    let c = [t.key];
    nc(l)
      ? (c = l.map((e, t) => {
        const n = o[e.type],
          r = n ? n({ [e.type]: e.value, index: t, parts: l }) : [e.value];
        var s;
        return nc((s = r)) && !oc(s[0]) && (r[0].key = `${e.type}-${t}`), r;
      }))
      : oc(l) && (c = [l]);
    const i = ql({}, s);
    return Jo(oc(e.tag) || ac(e.tag) ? e.tag : wu(), i, c);
  };
}
const xu = $n({
  name: "i18n-n",
  props: ql(
    {
      value: { type: Number, required: !0 },
      format: { type: [String, Object] },
    },
    Iu
  ),
  setup(e, t) {
    const n = e.i18n || Wu({ useScope: "parent", __useComponent: !0 });
    return Pu(e, t, ru, (...e) => n[mu](...e));
  },
}),
  Ru = $n({
    name: "i18n-d",
    props: ql(
      {
        value: { type: [Number, Date], required: !0 },
        format: { type: [String, Object] },
      },
      Iu
    ),
    setup(e, t) {
      const n = e.i18n || Wu({ useScope: "parent", __useComponent: !0 });
      return Pu(e, t, Zi, (...e) => n[du](...e));
    },
  });
function Fu(e) {
  if (oc(e)) return { path: e };
  if (uc(e)) {
    if (!("path" in e)) throw fu(uu.REQUIRED_VALUE);
    return e;
  }
  throw fu(uu.INVALID_VALUE);
}
function Mu(e) {
  const { path: t, locale: n, args: r, choice: o, plural: s } = e,
    a = {},
    l = r || {};
  return (
    oc(n) && (a.locale = n),
    Yl(o) && (a.plural = o),
    Yl(s) && (a.plural = s),
    [t, l, a]
  );
}
function Du(e, t, ...n) {
  const r = uc(n[0]) ? n[0] : {},
    o = !!r.useI18nComponentName;
  (!sc(r.globalInstall) || r.globalInstall) &&
    ([o ? "i18n" : Au.name, "I18nT"].forEach((t) => e.component(t, Au)),
      [xu.name, "I18nN"].forEach((t) => e.component(t, xu)),
      [Ru.name, "I18nD"].forEach((t) => e.component(t, Ru))),
    e.directive(
      "t",
      (function (e) {
        const t = (t) => {
          const { instance: n, modifiers: r, value: o } = t;
          if (!n || !n.$) throw fu(uu.UNEXPECTED_ERROR);
          const s = (function (e, t) {
            const n = e;
            if ("composition" === e.mode)
              return n.__getInstance(t) || e.global;
            {
              const r = n.__getInstance(t);
              return null != r ? r.__composer : e.global.__composer;
            }
          })(e, n.$),
            a = Fu(o);
          return [Reflect.apply(s.t, s, [...Mu(a)]), s];
        };
        return {
          created: (n, r) => {
            const [o, s] = t(r);
            Vl &&
              e.global === s &&
              (n.__i18nWatcher = En(s.locale, () => {
                r.instance && r.instance.$forceUpdate();
              })),
              (n.__composer = s),
              (n.textContent = o);
          },
          unmounted: (e) => {
            Vl &&
              e.__i18nWatcher &&
              (e.__i18nWatcher(),
                (e.__i18nWatcher = void 0),
                delete e.__i18nWatcher),
              e.__composer && ((e.__composer = void 0), delete e.__composer);
          },
          beforeUpdate: (e, { value: t }) => {
            if (e.__composer) {
              const n = e.__composer,
                r = Fu(t);
              e.textContent = Reflect.apply(n.t, n, [...Mu(r)]);
            }
          },
          getSSRProps: (e) => {
            const [n] = t(e);
            return { textContent: n };
          },
        };
      })(t)
    );
}
function Uu(e, t) {
  (e.locale = t.locale || e.locale),
    (e.fallbackLocale = t.fallbackLocale || e.fallbackLocale),
    (e.missing = t.missing || e.missing),
    (e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn),
    (e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn),
    (e.formatFallbackMessages =
      t.formatFallbackMessages || e.formatFallbackMessages),
    (e.postTranslation = t.postTranslation || e.postTranslation),
    (e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage),
    (e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml),
    (e.sync = t.sync || e.sync),
    e.__composer[hu](t.pluralizationRules || e.pluralizationRules);
  const n = yu(e.locale, { messages: t.messages, __i18n: t.__i18n });
  return (
    Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])),
    t.datetimeFormats &&
    Object.keys(t.datetimeFormats).forEach((n) =>
      e.mergeDateTimeFormat(n, t.datetimeFormats[n])
    ),
    t.numberFormats &&
    Object.keys(t.numberFormats).forEach((n) =>
      e.mergeNumberFormat(n, t.numberFormats[n])
    ),
    e
  );
}
const $u = Hl("global-vue-i18n");
function Wu(e = {}) {
  const t = Do();
  if (null == t) throw fu(uu.MUST_BE_CALL_SETUP_TOP);
  if (
    !t.isCE &&
    null != t.appContext.app &&
    !t.appContext.app.__VUE_I18N_SYMBOL__
  )
    throw fu(uu.NOT_INSTALLED);
  const n = (function (e) {
    {
      const t = xr(e.isCE ? $u : e.appContext.app.__VUE_I18N_SYMBOL__);
      if (!t)
        throw fu(
          e.isCE ? uu.NOT_INSTALLED_WITH_PROVIDE : uu.UNEXPECTED_ERROR
        );
      return t;
    }
  })(t),
    r = (function (e) {
      return "composition" === e.mode ? e.global : e.global.__composer;
    })(n),
    o = bu(t),
    s = (function (e, t) {
      return zl(e)
        ? "__i18n" in t
          ? "local"
          : "global"
        : e.useScope
          ? e.useScope
          : "local";
    })(e, o);
  if ("legacy" === n.mode && !e.__useComponent) {
    if (!n.allowComposition) throw fu(uu.NOT_AVAILABLE_IN_LEGACY_MODE);
    return (function (e, t, n, r = {}) {
      const o = "local" === t,
        s = bt(null);
      if (o && e.proxy && !e.proxy.$options.i18n && !e.proxy.$options.__i18n)
        throw fu(uu.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
      const a = sc(r.inheritLocale) ? r.inheritLocale : !oc(r.locale),
        l = yt(!o || a ? n.locale.value : oc(r.locale) ? r.locale : Ci),
        c = yt(
          !o || a
            ? n.fallbackLocale.value
            : oc(r.fallbackLocale) ||
              nc(r.fallbackLocale) ||
              uc(r.fallbackLocale) ||
              !1 === r.fallbackLocale
              ? r.fallbackLocale
              : l.value
        ),
        i = yt(yu(l.value, r)),
        u = yt(uc(r.datetimeFormats) ? r.datetimeFormats : { [l.value]: {} }),
        f = yt(uc(r.numberFormats) ? r.numberFormats : { [l.value]: {} }),
        p = o
          ? n.missingWarn
          : (!sc(r.missingWarn) && !Kl(r.missingWarn)) || r.missingWarn,
        d = o
          ? n.fallbackWarn
          : (!sc(r.fallbackWarn) && !Kl(r.fallbackWarn)) || r.fallbackWarn,
        m = o ? n.fallbackRoot : !sc(r.fallbackRoot) || r.fallbackRoot,
        h = !!r.fallbackFormat,
        _ = rc(r.missing) ? r.missing : null,
        g = rc(r.postTranslation) ? r.postTranslation : null,
        v = o ? n.warnHtmlMessage : !sc(r.warnHtmlMessage) || r.warnHtmlMessage,
        y = !!r.escapeParameter,
        b = o ? n.modifiers : uc(r.modifiers) ? r.modifiers : {},
        E = r.pluralRules || (o && n.pluralRules);
      function k() {
        return [l.value, c.value, i.value, u.value, f.value];
      }
      const L = qo({
        get: () => (s.value ? s.value.locale.value : l.value),
        set: (e) => {
          s.value && (s.value.locale.value = e), (l.value = e);
        },
      }),
        C = qo({
          get: () => (s.value ? s.value.fallbackLocale.value : c.value),
          set: (e) => {
            s.value && (s.value.fallbackLocale.value = e), (c.value = e);
          },
        }),
        N = qo(() => (s.value ? s.value.messages.value : i.value)),
        T = qo(() => u.value),
        O = qo(() => f.value);
      function S() {
        return s.value ? s.value.getPostTranslationHandler() : g;
      }
      function I(e) {
        s.value && s.value.setPostTranslationHandler(e);
      }
      function w() {
        return s.value ? s.value.getMissingHandler() : _;
      }
      function A(e) {
        s.value && s.value.setMissingHandler(e);
      }
      function P(e) {
        return k(), e();
      }
      function x(...e) {
        return s.value
          ? P(() => Reflect.apply(s.value.t, null, [...e]))
          : P(() => "");
      }
      function R(...e) {
        return s.value ? Reflect.apply(s.value.rt, null, [...e]) : "";
      }
      function F(...e) {
        return s.value
          ? P(() => Reflect.apply(s.value.d, null, [...e]))
          : P(() => "");
      }
      function M(...e) {
        return s.value
          ? P(() => Reflect.apply(s.value.n, null, [...e]))
          : P(() => "");
      }
      function D(e) {
        return s.value ? s.value.tm(e) : {};
      }
      function U(e, t) {
        return !!s.value && s.value.te(e, t);
      }
      function $(e) {
        return s.value ? s.value.getLocaleMessage(e) : {};
      }
      function W(e, t) {
        s.value && (s.value.setLocaleMessage(e, t), (i.value[e] = t));
      }
      function j(e, t) {
        s.value && s.value.mergeLocaleMessage(e, t);
      }
      function V(e) {
        return s.value ? s.value.getDateTimeFormat(e) : {};
      }
      function H(e, t) {
        s.value && (s.value.setDateTimeFormat(e, t), (u.value[e] = t));
      }
      function B(e, t) {
        s.value && s.value.mergeDateTimeFormat(e, t);
      }
      function G(e) {
        return s.value ? s.value.getNumberFormat(e) : {};
      }
      function Y(e, t) {
        s.value && (s.value.setNumberFormat(e, t), (f.value[e] = t));
      }
      function X(e, t) {
        s.value && s.value.mergeNumberFormat(e, t);
      }
      const K = {
        get id() {
          return s.value ? s.value.id : -1;
        },
        locale: L,
        fallbackLocale: C,
        messages: N,
        datetimeFormats: T,
        numberFormats: O,
        get inheritLocale() {
          return s.value ? s.value.inheritLocale : a;
        },
        set inheritLocale(e) {
          s.value && (s.value.inheritLocale = e);
        },
        get availableLocales() {
          return s.value ? s.value.availableLocales : Object.keys(i.value);
        },
        get modifiers() {
          return s.value ? s.value.modifiers : b;
        },
        get pluralRules() {
          return s.value ? s.value.pluralRules : E;
        },
        get isGlobal() {
          return !!s.value && s.value.isGlobal;
        },
        get missingWarn() {
          return s.value ? s.value.missingWarn : p;
        },
        set missingWarn(e) {
          s.value && (s.value.missingWarn = e);
        },
        get fallbackWarn() {
          return s.value ? s.value.fallbackWarn : d;
        },
        set fallbackWarn(e) {
          s.value && (s.value.missingWarn = e);
        },
        get fallbackRoot() {
          return s.value ? s.value.fallbackRoot : m;
        },
        set fallbackRoot(e) {
          s.value && (s.value.fallbackRoot = e);
        },
        get fallbackFormat() {
          return s.value ? s.value.fallbackFormat : h;
        },
        set fallbackFormat(e) {
          s.value && (s.value.fallbackFormat = e);
        },
        get warnHtmlMessage() {
          return s.value ? s.value.warnHtmlMessage : v;
        },
        set warnHtmlMessage(e) {
          s.value && (s.value.warnHtmlMessage = e);
        },
        get escapeParameter() {
          return s.value ? s.value.escapeParameter : y;
        },
        set escapeParameter(e) {
          s.value && (s.value.escapeParameter = e);
        },
        t: x,
        getPostTranslationHandler: S,
        setPostTranslationHandler: I,
        getMissingHandler: w,
        setMissingHandler: A,
        rt: R,
        d: F,
        n: M,
        tm: D,
        te: U,
        getLocaleMessage: $,
        setLocaleMessage: W,
        mergeLocaleMessage: j,
        getDateTimeFormat: V,
        setDateTimeFormat: H,
        mergeDateTimeFormat: B,
        getNumberFormat: G,
        setNumberFormat: Y,
        mergeNumberFormat: X,
      };
      function z(e) {
        (e.locale.value = l.value),
          (e.fallbackLocale.value = c.value),
          Object.keys(i.value).forEach((t) => {
            e.mergeLocaleMessage(t, i.value[t]);
          }),
          Object.keys(u.value).forEach((t) => {
            e.mergeDateTimeFormat(t, u.value[t]);
          }),
          Object.keys(f.value).forEach((t) => {
            e.mergeNumberFormat(t, f.value[t]);
          }),
          (e.escapeParameter = y),
          (e.fallbackFormat = h),
          (e.fallbackRoot = m),
          (e.fallbackWarn = d),
          (e.missingWarn = p),
          (e.warnHtmlMessage = v);
      }
      return (
        Kn(() => {
          if (null == e.proxy || null == e.proxy.$i18n)
            throw fu(uu.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
          const n = (s.value = e.proxy.$i18n.__composer);
          "global" === t
            ? ((l.value = n.locale.value),
              (c.value = n.fallbackLocale.value),
              (i.value = n.messages.value),
              (u.value = n.datetimeFormats.value),
              (f.value = n.numberFormats.value))
            : o && z(n);
        }),
        K
      );
    })(t, s, r, e);
  }
  if ("global" === s) return Eu(r, e, o), r;
  if ("parent" === s) {
    let o = (function (e, t, n = !1) {
      let r = null;
      const o = t.root;
      let s = (function (e, t = !1) {
        if (null == e) return null;
        return (t && e.vnode.ctx) || e.parent;
      })(t, n);
      for (; null != s;) {
        const t = e;
        if ("composition" === e.mode) r = t.__getInstance(s);
        else {
          const e = t.__getInstance(s);
          null != e && ((r = e.__composer), n && r && !r[_u] && (r = null));
        }
        if (null != r) break;
        if (o === s) break;
        s = s.parent;
      }
      return r;
    })(n, t, e.__useComponent);
    return null == o && (o = r), o;
  }
  const a = n;
  let l = a.__getInstance(t);
  if (null == l) {
    const n = ql({}, e);
    "__i18n" in o && (n.__i18n = o.__i18n),
      r && (n.__root = r),
      (l = Ou(n)),
      a.__composerExtend && (l[gu] = a.__composerExtend(l)),
      (function (e, t, n) {
        zn(() => { }, t),
          Zn(() => {
            const r = n;
            e.__deleteInstance(t);
            const o = r[gu];
            o && (o(), delete r[gu]);
          }, t);
      })(a, t, l),
      a.__setInstance(t, l);
  }
  return l;
}
const ju = ["locale", "fallbackLocale", "availableLocales"],
  Vu = ["t", "rt", "d", "n", "tm", "te"];
"boolean" != typeof __INTLIFY_JIT_COMPILATION__ &&
  (Ql().__INTLIFY_JIT_COMPILATION__ = !1),
  "boolean" != typeof __INTLIFY_DROP_MESSAGE_COMPILER__ &&
  (Ql().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
  __INTLIFY_JIT_COMPILATION__
    ? wi(function (e, t) {
      if (
        __INTLIFY_JIT_COMPILATION__ &&
        !__INTLIFY_DROP_MESSAGE_COMPILER__ &&
        oc(e)
      ) {
        !sc(t.warnHtmlMessage) || t.warnHtmlMessage;
        const n = (t.onCacheKey || ji)(e),
          r = Vi[n];
        if (r) return r;
        const { ast: o, detectError: s } = Bi(e, {
          ...t,
          location: !1,
          jit: !0,
        }),
          a = Ui(o);
        return s ? a : (Vi[n] = a);
      }
      {
        const t = e.cacheKey;
        if (t) {
          return Vi[t] || (Vi[t] = Ui(e));
        }
        return Ui(e);
      }
    })
    : wi(Gi),
  (Si = function (e, t) {
    if (!ac(e)) return null;
    let n = ti.get(t);
    if (
      (n ||
        ((n = (function (e) {
          const t = [];
          let n,
            r,
            o,
            s,
            a,
            l,
            c,
            i = -1,
            u = 0,
            f = 0;
          const p = [];
          function d() {
            const t = e[i + 1];
            if ((5 === u && "'" === t) || (6 === u && '"' === t))
              return i++, (o = "\\" + t), p[0](), !0;
          }
          for (
            p[0] = () => {
              void 0 === r ? (r = o) : (r += o);
            },
            p[1] = () => {
              void 0 !== r && (t.push(r), (r = void 0));
            },
            p[2] = () => {
              p[0](), f++;
            },
            p[3] = () => {
              if (f > 0) f--, (u = 4), p[0]();
              else {
                if (((f = 0), void 0 === r)) return !1;
                if (((r = ei(r)), !1 === r)) return !1;
                p[1]();
              }
            };
            null !== u;

          )
            if ((i++, (n = e[i]), "\\" !== n || !d())) {
              if (((s = Zc(n)), (c = Jc[u]), (a = c[s] || c.l || 8), 8 === a))
                return;
              if (
                ((u = a[0]),
                  void 0 !== a[1] && ((l = p[a[1]]), l && ((o = n), !1 === l())))
              )
                return;
              if (7 === u) return t;
            }
        })(t)),
          n && ti.set(t, n)),
        !n)
    )
      return null;
    const r = n.length;
    let o = e,
      s = 0;
    for (; s < r;) {
      const e = o[n[s]];
      if (void 0 === e) return null;
      if (rc(o)) return null;
      (o = e), s++;
    }
    return o;
  }),
  (Ii = vi);
const Hu = (navigator.language || "zhCN").toLocaleLowerCase();
let Bu = localStorage.getItem("language") || Hu.split("-").join("") || "zhCN";
["zhCN", "en"].includes(Bu) || (Bu = "zhCN"),
  localStorage.setItem("language", Bu);
const Gu = (function (e = {}, t) {
  const n = !sc(e.legacy) || e.legacy,
    r = !sc(e.globalInjection) || e.globalInjection,
    o = !n || !!e.allowComposition,
    s = new Map(),
    [a, l] = (function (e, t, n) {
      const r = Q();
      {
        const n = t ? r.run(() => Su(e)) : r.run(() => Ou(e));
        if (null == n) throw fu(uu.UNEXPECTED_ERROR);
        return [r, n];
      }
    })(e, n),
    c = Hl("");
  {
    const e = {
      get mode() {
        return n ? "legacy" : "composition";
      },
      get allowComposition() {
        return o;
      },
      async install(t, ...o) {
        if (
          ((t.__VUE_I18N_SYMBOL__ = c),
            t.provide(t.__VUE_I18N_SYMBOL__, e),
            uc(o[0]))
        ) {
          const t = o[0];
          (e.__composerExtend = t.__composerExtend),
            (e.__vueI18nExtend = t.__vueI18nExtend);
        }
        let s = null;
        !n &&
          r &&
          (s = (function (e, t) {
            const n = Object.create(null);
            ju.forEach((e) => {
              const r = Object.getOwnPropertyDescriptor(t, e);
              if (!r) throw fu(uu.UNEXPECTED_ERROR);
              const o = vt(r.value)
                ? {
                  get: () => r.value.value,
                  set(e) {
                    r.value.value = e;
                  },
                }
                : { get: () => r.get && r.get() };
              Object.defineProperty(n, e, o);
            }),
              (e.config.globalProperties.$i18n = n),
              Vu.forEach((n) => {
                const r = Object.getOwnPropertyDescriptor(t, n);
                if (!r || !r.value) throw fu(uu.UNEXPECTED_ERROR);
                Object.defineProperty(e.config.globalProperties, `$${n}`, r);
              });
            const r = () => {
              delete e.config.globalProperties.$i18n,
                Vu.forEach((t) => {
                  delete e.config.globalProperties[`$${t}`];
                });
            };
            return r;
          })(t, e.global)),
          Du(t, e, ...o),
          n &&
          t.mixin(
            (function (e, t, n) {
              return {
                beforeCreate() {
                  const r = Do();
                  if (!r) throw fu(uu.UNEXPECTED_ERROR);
                  const o = this.$options;
                  if (o.i18n) {
                    const r = o.i18n;
                    if (
                      (o.__i18n && (r.__i18n = o.__i18n),
                        (r.__root = t),
                        this === this.$root)
                    )
                      this.$i18n = Uu(e, r);
                    else {
                      (r.__injectWithOption = !0),
                        (r.__extender = n.__vueI18nExtend),
                        (this.$i18n = Su(r));
                      const e = this.$i18n;
                      e.__extender &&
                        (e.__disposer = e.__extender(this.$i18n));
                    }
                  } else if (o.__i18n)
                    if (this === this.$root) this.$i18n = Uu(e, o);
                    else {
                      this.$i18n = Su({
                        __i18n: o.__i18n,
                        __injectWithOption: !0,
                        __extender: n.__vueI18nExtend,
                        __root: t,
                      });
                      const e = this.$i18n;
                      e.__extender &&
                        (e.__disposer = e.__extender(this.$i18n));
                    }
                  else this.$i18n = e;
                  o.__i18nGlobal && Eu(t, o, o),
                    (this.$t = (...e) => this.$i18n.t(...e)),
                    (this.$rt = (...e) => this.$i18n.rt(...e)),
                    (this.$tc = (...e) => this.$i18n.tc(...e)),
                    (this.$te = (e, t) => this.$i18n.te(e, t)),
                    (this.$d = (...e) => this.$i18n.d(...e)),
                    (this.$n = (...e) => this.$i18n.n(...e)),
                    (this.$tm = (e) => this.$i18n.tm(e)),
                    n.__setInstance(r, this.$i18n);
                },
                mounted() { },
                unmounted() {
                  const e = Do();
                  if (!e) throw fu(uu.UNEXPECTED_ERROR);
                  const t = this.$i18n;
                  delete this.$t,
                    delete this.$rt,
                    delete this.$tc,
                    delete this.$te,
                    delete this.$d,
                    delete this.$n,
                    delete this.$tm,
                    t.__disposer &&
                    (t.__disposer(),
                      delete t.__disposer,
                      delete t.__extender),
                    n.__deleteInstance(e),
                    delete this.$i18n;
                },
              };
            })(l, l.__composer, e)
          );
        const a = t.unmount;
        t.unmount = () => {
          s && s(), e.dispose(), a();
        };
      },
      get global() {
        return l;
      },
      dispose() {
        a.stop();
      },
      __instances: s,
      __getInstance: function (e) {
        return s.get(e) || null;
      },
      __setInstance: function (e, t) {
        s.set(e, t);
      },
      __deleteInstance: function (e) {
        s.delete(e);
      },
    };
    return e;
  }
})({
  legacy: !1,
  globalInjection: !0,
  locale: Bu,
  messages: {
    en: { header: { title: "header title" } },
    zhCN: { header: { title: "网页标题" } },
  },
}),
  Yu = (function () {
    const e = Q(!0),
      t = e.run(() => yt({}));
    let n = [],
      r = [];
    const o = dt({
      install(e) {
        Tl(o),
          (o._a = e),
          e.provide(Ol, o),
          (e.config.globalProperties.$pinia = o),
          r.forEach((e) => n.push(e)),
          (r = []);
      },
      use(e) {
        return this._a ? n.push(e) : r.push(e), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: new Map(),
      state: t,
    });
    return o;
  })(),
  Xu = ((...e) => {
    const t = $s().createApp(...e),
      { mount: n } = t;
    return (
      (t.mount = (e) => {
        const r = (function (e) {
          if (_(e)) {
            return document.querySelector(e);
          }
          return e;
        })(e);
        if (!r) return;
        const o = t._component;
        h(o) || o.render || o.template || (o.template = r.innerHTML),
          (r.innerHTML = "");
        const s = n(r, !1, r instanceof SVGElement);
        return (
          r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
          s
        );
      }),
      t
    );
  })(Vs);
Xu.use(Yu), Xu.use(Cl), Xu.use(Gu);
const Ku = jl();
function zu() {
  Ku.setMobile(window.innerWidth < 750);
}
window.addEventListener("resize", zu), zu(), Xu.mount("#app");
export {
  Hn as $,
  Ms as A,
  bs as B,
  Tn as C,
  ar as D,
  W as E,
  so as F,
  or as G,
  xr as H,
  ot as I,
  Zn as J,
  El as K,
  jl as L,
  To as M,
  h as N,
  Kn as O,
  r as P,
  No as Q,
  v as R,
  ao as S,
  ls as T,
  lo as U,
  Po as V,
  p as W,
  St as X,
  ro as Y,
  at as Z,
  js as _,
  fo as a,
  st as a0,
  _n as a1,
  Ws as a2,
  dr as a3,
  Gt as a4,
  Wl as a5,
  Z as a6,
  ee as a7,
  S as a8,
  f as a9,
  Pt as aa,
  yn as ab,
  vt as ac,
  At as ad,
  Jo as ae,
  sr as af,
  Oo as ag,
  Co as b,
  _o as c,
  $n as d,
  ln as e,
  Lo as f,
  So as g,
  an as h,
  kl as i,
  mn as j,
  go as k,
  vo as l,
  Do as m,
  G as n,
  Qn as o,
  sn as p,
  pr as q,
  yt as r,
  bt as s,
  K as t,
  Lt as u,
  qo as v,
  En as w,
  zn as x,
  Pr as y,
  _ as z,
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "./Main-14r9cuNB.js",
      "./BaseNav-gEMimc-t.js",
      "./MsStake-XXQrYsOj.js",
      "./MsStake-N9z14R0i.css",
      "./MetaMask-8E0tWPSn.js",
      "./ERC20-wN4H9J0h.js",
      "./index-WsM8dx5w.js",
      "./BaseNav-BJQ79b6s.css",
      "./common-f_BnFCK6.css",
      "./custompopups-GfQchbWB.js",
      "./Main-62k_HywM.css",
      "./Home-jCGeTYJQ.js",
      "./Home-MGFR8aOr.css",
      "./Deposit-3Twm8R_T.js",
      "./el-input-YakXQcco.js",
      "./el-input-z0Ij2Qd4.css",
      "./planet-IJmQEfjB.js",
      "./planet-hJy7xi4B.css",
      "./Deposit--bIdhZpo.css",
      "./Unstake-p0GX71R8.js",
      "./Unstake-8HmjlGCm.css",
      "./Claim-QUHrbVTU.js",
      "./Claim-G8VaG4Y1.css",
      "./FAQ-7xTh9Np8.js",
      "./FAQ-JiTFgxkI.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}

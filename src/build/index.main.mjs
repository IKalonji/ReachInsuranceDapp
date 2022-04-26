// Automatically generated with Reach 0.1.10 (b3269997)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (b3269997)';
export const _backendVersion = 13;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0, ctc0, ctc1],
      3: [ctc0, ctc0, ctc1, ctc1],
      5: [ctc0, ctc0, ctc1],
      6: [ctc0],
      8: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1],
      9: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      10: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1],
      11: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1],
      12: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function InsuranceCompany(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for InsuranceCompany expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for InsuranceCompany expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bool;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 0,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v182, time: v181, didSend: v22, from: v180 } = txn1;
  ;
  const v185 = stdlib.protect(ctc0, await interact.getControlBalance(), {
    at: './index.rsh:36:72:application',
    fs: ['at ./index.rsh:35:28:application call to [unknown function] (defined at: ./index.rsh:35:32:function exp)'],
    msg: 'getControlBalance',
    who: 'InsuranceCompany'
    });
  const v186 = stdlib.gt(v185, stdlib.checkedBigNumberify('./index.rsh:37:36:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v186, {
    at: './index.rsh:37:15:application',
    fs: ['at ./index.rsh:35:28:application call to [unknown function] (defined at: ./index.rsh:35:32:function exp)'],
    msg: null,
    who: 'InsuranceCompany'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v180, v185],
    evt_cnt: 1,
    funcNum: 1,
    lct: v181,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v188], secs: v190, time: v189, didSend: v32, from: v187 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v188], secs: v190, time: v189, didSend: v32, from: v187 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v197], secs: v199, time: v198, didSend: v44, from: v196 } = txn3;
  ;
  const v200 = stdlib.addressEq(v180, v196);
  stdlib.assert(v200, {
    at: './index.rsh:47:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 3,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v203, time: v202, didSend: v49, from: v201 } = txn4;
  ;
  const v204 = stdlib.addressEq(v180, v201);
  stdlib.assert(v204, {
    at: './index.rsh:67:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  let v206 = stdlib.checkedBigNumberify('./index.rsh:70:49:decimal', stdlib.UInt_max, '0');
  let v207 = stdlib.checkedBigNumberify('./index.rsh:70:46:decimal', stdlib.UInt_max, '0');
  let v208 = v202;
  let v215 = stdlib.checkedBigNumberify('./index.rsh:29:36:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v217 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
    
    return v217;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v225], secs: v227, time: v226, didSend: v70, from: v224 } = txn5;
    ;
    const v228 = stdlib.addressEq(v180, v224);
    stdlib.assert(v228, {
      at: './index.rsh:87:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const v231 = stdlib.sub(stdlib.UInt_max, v226);
    const v232 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2'));
    const v233 = stdlib.ge(v232, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v233, {
      at: 'reach standard library:562:15:application',
      fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:91:13:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
      msg: null,
      who: 'InsuranceCompany'
      });
    const v234 = stdlib.add(v226, stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2'));
    await ctc.waitUntilTime(v234);
    const txn6 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 8,
      out_tys: [],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v238, time: v237, didSend: v88, from: v236 } = txn6;
    const v240 = stdlib.add(v215, v197);
    ;
    const v241 = stdlib.addressEq(v180, v236);
    stdlib.assert(v241, {
      at: './index.rsh:93:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const txn7 = await (ctc.recv({
      didSend: false,
      evt_cnt: 2,
      funcNum: 9,
      out_tys: [ctc1, ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v253, v254], secs: v256, time: v255, didSend: v106, from: v252 } = txn7;
    ;
    const v257 = stdlib.addressEq(v180, v252);
    stdlib.assert(v257, {
      at: './index.rsh:103:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const v259 = stdlib.le(v254, v240);
    stdlib.assert(v259, {
      at: './index.rsh:104:16:application',
      fs: [],
      msg: null,
      who: 'InsuranceCompany'
      });
    const v263 = stdlib.protect(ctc1, await interact.approveUserRequest(v240, v253, v254), {
      at: './index.rsh:108:68:application',
      fs: ['at ./index.rsh:107:30:application call to [unknown function] (defined at: ./index.rsh:107:34:function exp)'],
      msg: 'approveUserRequest',
      who: 'InsuranceCompany'
      });
    
    const txn8 = await (ctc.sendrecv({
      args: [v180, v187, v188, v197, v206, v240, v254, v263],
      evt_cnt: 1,
      funcNum: 10,
      lct: v255,
      onlyIf: true,
      out_tys: [ctc1],
      pay: [stdlib.checkedBigNumberify('./index.rsh:110:26:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn8) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v265], secs: v267, time: v266, didSend: v119, from: v264 } = txn8;
        
        ;
        const v268 = stdlib.addressEq(v187, v264);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [v265], secs: v267, time: v266, didSend: v119, from: v264 } = txn8;
    ;
    const v268 = stdlib.addressEq(v187, v264);
    stdlib.assert(v268, {
      at: './index.rsh:110:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const txn9 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 11,
      out_tys: [ctc0],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v273], secs: v275, time: v274, didSend: v129, from: v272 } = txn9;
    ;
    const v276 = stdlib.addressEq(v180, v272);
    stdlib.assert(v276, {
      at: './index.rsh:125:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'InsuranceCompany'
      });
    const v277 = stdlib.ge(v273, v188);
    if (v277) {
      if (v265) {
        const v281 = stdlib.sub(v240, v254);
        ;
        const v282 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
        const cv206 = v282;
        const cv207 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
        const cv208 = v274;
        const cv215 = v281;
        
        v206 = cv206;
        v207 = cv207;
        v208 = cv208;
        v215 = cv215;
        
        continue;}
      else {
        const v283 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
        const cv206 = v283;
        const cv207 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
        const cv208 = v274;
        const cv215 = v240;
        
        v206 = cv206;
        v207 = cv207;
        v208 = cv208;
        v215 = cv215;
        
        continue;}}
    else {
      const cv206 = v206;
      const cv207 = stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '1');
      const cv208 = v274;
      const cv215 = v240;
      
      v206 = cv206;
      v207 = cv207;
      v208 = cv208;
      v215 = cv215;
      
      continue;}
    
    
    
    
    
    
    
    
    
    }
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 5,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v288], secs: v290, time: v289, didSend: v145, from: v287 } = txn5;
  ;
  const v291 = stdlib.addressEq(v180, v287);
  stdlib.assert(v291, {
    at: './index.rsh:148:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  ;
  const v299 = stdlib.protect(ctc0, await interact.getInsuranceCompanyBalance(), {
    at: './index.rsh:153:95:application',
    fs: ['at ./index.rsh:152:28:application call to [unknown function] (defined at: ./index.rsh:152:32:function exp)'],
    msg: 'getInsuranceCompanyBalance',
    who: 'InsuranceCompany'
    });
  
  const txn6 = await (ctc.sendrecv({
    args: [v187, v299],
    evt_cnt: 1,
    funcNum: 6,
    lct: v289,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:155:24:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn6) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v301], secs: v303, time: v302, didSend: v160, from: v300 } = txn6;
      
      ;
      const v304 = stdlib.addressEq(v187, v300);
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v301], secs: v303, time: v302, didSend: v160, from: v300 } = txn6;
  ;
  const v304 = stdlib.addressEq(v187, v300);
  stdlib.assert(v304, {
    at: './index.rsh:155:24:dot',
    fs: [],
    msg: 'sender correct',
    who: 'InsuranceCompany'
    });
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
export async function Subscriber(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Subscriber expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Subscriber expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Object({
    isRequested: ctc2,
    requestedPayment: ctc0
    });
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:30:18:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v182, time: v181, didSend: v22, from: v180 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v182, time: v181, didSend: v22, from: v180 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v188], secs: v190, time: v189, didSend: v32, from: v187 } = txn2;
  ;
  const v193 = stdlib.protect(ctc0, await interact.getPayment(), {
    at: './index.rsh:43:55:application',
    fs: ['at ./index.rsh:42:22:application call to [unknown function] (defined at: ./index.rsh:42:26:function exp)'],
    msg: 'getPayment',
    who: 'Subscriber'
    });
  const v194 = stdlib.gt(v193, stdlib.checkedBigNumberify('./index.rsh:44:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v194, {
    at: './index.rsh:44:15:application',
    fs: ['at ./index.rsh:42:22:application call to [unknown function] (defined at: ./index.rsh:42:26:function exp)'],
    msg: null,
    who: 'Subscriber'
    });
  const v195 = stdlib.gt(v188, v193);
  stdlib.assert(v195, {
    at: './index.rsh:45:15:application',
    fs: ['at ./index.rsh:42:22:application call to [unknown function] (defined at: ./index.rsh:42:26:function exp)'],
    msg: null,
    who: 'Subscriber'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v180, v187, v188, v193],
    evt_cnt: 1,
    funcNum: 2,
    lct: v189,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:47:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v197], secs: v199, time: v198, didSend: v44, from: v196 } = txn3;
      
      ;
      const v200 = stdlib.addressEq(v180, v196);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v197], secs: v199, time: v198, didSend: v44, from: v196 } = txn3;
  ;
  const v200 = stdlib.addressEq(v180, v196);
  stdlib.assert(v200, {
    at: './index.rsh:47:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v180, v187, v188, v197],
    evt_cnt: 0,
    funcNum: 3,
    lct: v198,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:67:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v203, time: v202, didSend: v49, from: v201 } = txn4;
      
      ;
      const v204 = stdlib.addressEq(v180, v201);
      ;
      const v206 = stdlib.checkedBigNumberify('./index.rsh:70:49:decimal', stdlib.UInt_max, '0');
      const v207 = stdlib.checkedBigNumberify('./index.rsh:70:46:decimal', stdlib.UInt_max, '0');
      const v208 = v202;
      const v215 = stdlib.checkedBigNumberify('./index.rsh:29:36:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v217 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
        
        return v217;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v203, time: v202, didSend: v49, from: v201 } = txn4;
  ;
  const v204 = stdlib.addressEq(v180, v201);
  stdlib.assert(v204, {
    at: './index.rsh:67:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  let v206 = stdlib.checkedBigNumberify('./index.rsh:70:49:decimal', stdlib.UInt_max, '0');
  let v207 = stdlib.checkedBigNumberify('./index.rsh:70:46:decimal', stdlib.UInt_max, '0');
  let v208 = v202;
  let v215 = stdlib.checkedBigNumberify('./index.rsh:29:36:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v217 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
    
    return v217;})()) {
    const v220 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:78:52:decimal', stdlib.UInt_max, '1'));
    stdlib.protect(ctc1, await interact.showPaymentCount(v220), {
      at: './index.rsh:78:36:application',
      fs: ['at ./index.rsh:77:24:application call to [unknown function] (defined at: ./index.rsh:77:28:function exp)'],
      msg: 'showPaymentCount',
      who: 'Subscriber'
      });
    
    const v223 = stdlib.protect(ctc0, await interact.getSubscriberBalanceBeforePayment(), {
      at: './index.rsh:84:98:application',
      fs: ['at ./index.rsh:83:24:application call to [unknown function] (defined at: ./index.rsh:83:28:function exp)'],
      msg: 'getSubscriberBalanceBeforePayment',
      who: 'Subscriber'
      });
    
    const txn5 = await (ctc.sendrecv({
      args: [v180, v187, v188, v197, v206, v215, v223],
      evt_cnt: 1,
      funcNum: 7,
      lct: v208,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:87:20:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn5) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v225], secs: v227, time: v226, didSend: v70, from: v224 } = txn5;
        
        ;
        const v228 = stdlib.addressEq(v180, v224);
        ;
        const v231 = stdlib.sub(stdlib.UInt_max, v226);
        const v232 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2'));
        const v233 = stdlib.ge(v232, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
        ;
        const v234 = stdlib.add(v226, stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2'));
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v225], secs: v227, time: v226, didSend: v70, from: v224 } = txn5;
    ;
    const v228 = stdlib.addressEq(v180, v224);
    stdlib.assert(v228, {
      at: './index.rsh:87:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v231 = stdlib.sub(stdlib.UInt_max, v226);
    const v232 = stdlib.sub(v231, stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2'));
    const v233 = stdlib.ge(v232, stdlib.checkedBigNumberify('reach standard library:562:43:decimal', stdlib.UInt_max, '0'));
    stdlib.assert(v233, {
      at: 'reach standard library:562:15:application',
      fs: ['at reach standard library:570:29:application call to [unknown function] (defined at: reach standard library:559:55:function exp)', 'at ./index.rsh:91:13:application call to "relativeTime" (defined at: reach standard library:565:71:function exp)'],
      msg: null,
      who: 'Subscriber'
      });
    const v234 = stdlib.add(v226, stdlib.checkedBigNumberify('./index.rsh:33:19:decimal', stdlib.UInt_max, '2'));
    await ctc.waitUntilTime(v234);
    const txn6 = await (ctc.sendrecv({
      args: [v180, v187, v188, v197, v206, v215, v234],
      evt_cnt: 0,
      funcNum: 8,
      lct: v226,
      onlyIf: true,
      out_tys: [],
      pay: [v197, []],
      sim_p: (async (txn6) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v238, time: v237, didSend: v88, from: v236 } = txn6;
        
        const v240 = stdlib.add(v215, v197);
        sim_r.txns.push({
          amt: v197,
          kind: 'to',
          tok: undefined /* Nothing */
          });
        const v241 = stdlib.addressEq(v180, v236);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v238, time: v237, didSend: v88, from: v236 } = txn6;
    const v240 = stdlib.add(v215, v197);
    ;
    const v241 = stdlib.addressEq(v180, v236);
    stdlib.assert(v241, {
      at: './index.rsh:93:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v245 = stdlib.protect(ctc3, await interact.getUserRequest(v240), {
      at: './index.rsh:100:88:application',
      fs: ['at ./index.rsh:99:24:application call to [unknown function] (defined at: ./index.rsh:99:28:function exp)'],
      msg: 'getUserRequest',
      who: 'Subscriber'
      });
    const v246 = v245.isRequested;
    const v247 = v245.requestedPayment;
    const v251 = stdlib.le(v247, v240);
    stdlib.assert(v251, {
      at: './index.rsh:101:17:application',
      fs: ['at ./index.rsh:99:24:application call to [unknown function] (defined at: ./index.rsh:99:28:function exp)'],
      msg: null,
      who: 'Subscriber'
      });
    
    const txn7 = await (ctc.sendrecv({
      args: [v180, v187, v188, v197, v206, v240, v246, v247],
      evt_cnt: 2,
      funcNum: 9,
      lct: v237,
      onlyIf: true,
      out_tys: [ctc2, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:103:20:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn7) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v253, v254], secs: v256, time: v255, didSend: v106, from: v252 } = txn7;
        
        ;
        const v257 = stdlib.addressEq(v180, v252);
        ;
        const v259 = stdlib.le(v254, v240);
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v253, v254], secs: v256, time: v255, didSend: v106, from: v252 } = txn7;
    ;
    const v257 = stdlib.addressEq(v180, v252);
    stdlib.assert(v257, {
      at: './index.rsh:103:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v259 = stdlib.le(v254, v240);
    stdlib.assert(v259, {
      at: './index.rsh:104:16:application',
      fs: [],
      msg: null,
      who: 'Subscriber'
      });
    const txn8 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 10,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v265], secs: v267, time: v266, didSend: v119, from: v264 } = txn8;
    ;
    const v268 = stdlib.addressEq(v187, v264);
    stdlib.assert(v268, {
      at: './index.rsh:110:26:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v271 = stdlib.protect(ctc0, await interact.getSubscriberBalanceAfterPayment(), {
      at: './index.rsh:122:96:application',
      fs: ['at ./index.rsh:121:24:application call to [unknown function] (defined at: ./index.rsh:121:28:function exp)'],
      msg: 'getSubscriberBalanceAfterPayment',
      who: 'Subscriber'
      });
    
    const txn9 = await (ctc.sendrecv({
      args: [v180, v187, v188, v197, v206, v240, v254, v265, v271],
      evt_cnt: 1,
      funcNum: 11,
      lct: v266,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:125:20:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn9) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v273], secs: v275, time: v274, didSend: v129, from: v272 } = txn9;
        
        ;
        const v276 = stdlib.addressEq(v180, v272);
        ;
        const v277 = stdlib.ge(v273, v188);
        if (v277) {
          if (v265) {
            const v281 = stdlib.sub(v240, v254);
            sim_r.txns.push({
              amt: v254,
              kind: 'from',
              to: v180,
              tok: undefined /* Nothing */
              });
            const v282 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
            const cv206 = v282;
            const cv207 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
            const cv208 = v274;
            const cv215 = v281;
            
            await (async () => {
              const v206 = cv206;
              const v207 = cv207;
              const v208 = cv208;
              const v215 = cv215;
              
              if (await (async () => {
                const v217 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
                
                return v217;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();}
          else {
            const v283 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
            const cv206 = v283;
            const cv207 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
            const cv208 = v274;
            const cv215 = v240;
            
            await (async () => {
              const v206 = cv206;
              const v207 = cv207;
              const v208 = cv208;
              const v215 = cv215;
              
              if (await (async () => {
                const v217 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
                
                return v217;})()) {
                sim_r.isHalt = false;
                }
              else {
                sim_r.isHalt = false;
                }})();}}
        else {
          const cv206 = v206;
          const cv207 = stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '1');
          const cv208 = v274;
          const cv215 = v240;
          
          await (async () => {
            const v206 = cv206;
            const v207 = cv207;
            const v208 = cv208;
            const v215 = cv215;
            
            if (await (async () => {
              const v217 = stdlib.eq(v207, stdlib.checkedBigNumberify('./index.rsh:72:25:decimal', stdlib.UInt_max, '0'));
              
              return v217;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();}
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc2, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v273], secs: v275, time: v274, didSend: v129, from: v272 } = txn9;
    ;
    const v276 = stdlib.addressEq(v180, v272);
    stdlib.assert(v276, {
      at: './index.rsh:125:20:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Subscriber'
      });
    const v277 = stdlib.ge(v273, v188);
    if (v277) {
      if (v265) {
        const v281 = stdlib.sub(v240, v254);
        ;
        const v282 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
        const cv206 = v282;
        const cv207 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
        const cv208 = v274;
        const cv215 = v281;
        
        v206 = cv206;
        v207 = cv207;
        v208 = cv208;
        v215 = cv215;
        
        continue;}
      else {
        const v283 = stdlib.add(v206, stdlib.checkedBigNumberify('./index.rsh:134:65:decimal', stdlib.UInt_max, '1'));
        const cv206 = v283;
        const cv207 = stdlib.checkedBigNumberify('./index.rsh:134:47:decimal', stdlib.UInt_max, '0');
        const cv208 = v274;
        const cv215 = v240;
        
        v206 = cv206;
        v207 = cv207;
        v208 = cv208;
        v215 = cv215;
        
        continue;}}
    else {
      const cv206 = v206;
      const cv207 = stdlib.checkedBigNumberify('./index.rsh:137:47:decimal', stdlib.UInt_max, '1');
      const cv208 = v274;
      const cv215 = v240;
      
      v206 = cv206;
      v207 = cv207;
      v208 = cv208;
      v215 = cv215;
      
      continue;}
    
    
    
    
    
    
    
    
    
    }
  const v286 = stdlib.protect(ctc0, await interact.getSubscriberLastBalance(), {
    at: './index.rsh:146:87:application',
    fs: ['at ./index.rsh:145:22:application call to [unknown function] (defined at: ./index.rsh:145:26:function exp)'],
    msg: 'getSubscriberLastBalance',
    who: 'Subscriber'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v180, v187, v215, v286],
    evt_cnt: 1,
    funcNum: 5,
    lct: v208,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:148:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v288], secs: v290, time: v289, didSend: v145, from: v287 } = txn5;
      
      ;
      const v291 = stdlib.addressEq(v180, v287);
      ;
      sim_r.txns.push({
        amt: v215,
        kind: 'from',
        to: v187,
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc4, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v288], secs: v290, time: v289, didSend: v145, from: v287 } = txn5;
  ;
  const v291 = stdlib.addressEq(v180, v287);
  stdlib.assert(v291, {
    at: './index.rsh:148:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  ;
  const txn6 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 6,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v301], secs: v303, time: v302, didSend: v160, from: v300 } = txn6;
  ;
  const v304 = stdlib.addressEq(v187, v300);
  stdlib.assert(v304, {
    at: './index.rsh:155:24:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Subscriber'
    });
  return;
  
  
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAQAAFASFBYAggLAwUGCQpgDCYCAQAAIjUAMRhBBZ0pZEkiWzUBIQdbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSELDEADMkkhDAxAAdlJIQ0MQAFESSEIDEAAtCEIEkQhDzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/VyAgNf4kWzX9JVs1/CEEWzX7IQVbNfohDls1+Uk1BRc1+IAEECMi/zT4FlCwNP8xABJENPg0/Q9BAEQ0A1doARdBACexIrIBNPmyCCOyEDT/sgezNP80/jT9NPw0+yMIIjIGNPo0+QlCBCA0/zT+NP00/DT7IwgiMgY0+kIEDDT/NP40/TT8NPsjMgY0+kID+kghCDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/VyAgNf4kWzX9JVs1/CEEWzX7IQVbNfohDls1+Uk1BRc1+IAE/JO8UTT4FlEHCFCwNP4xABJENP80/lA0/RZQNPwWUDT7FlA0+hZQNPkWUDT4FlEHCFAoSwFXAGlnSCEPNQEyBjUCQgPoSCENNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/1cgIDX+JFs1/SVbNfwhBFs1+yEFWzX6STUFSVcAARc1+SNbNfiABIX8ZJY0+RZRBwhQNPgWULA0/zEAEkQ0+DT6DkQ0/zT+UDT9FlA0/BZQNPsWUDT6FlA0+BZQKEsBVwBoZ0ghCDUBMgY1AkIDWkmBBwxAARtJIQcMQACASCEMNAESRDQESSISTDQCEhFEKGRJNQNJSkpXACA1/1cgIDX+JFs1/SVbNfwhBFs1+yEOWzX6gAQX/NsusDIGNPoPRDQDIQVbNPwINfk0/IgDNzT/MQASRDT/NP5QNP0WUDT8FlA0+xZQNPkWUChLAVcAYGdIIQ01ATIGNQJCAsxIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/VyAgNf4kWzX9JVs1/CEEWzX7IQVbNfpJNQUXNfmABHGosaM0+RZQsDT/MQASRIH///////////8BMgYJIQYJIg9EMgYhBgg1+DT/NP5QNP0WUDT8FlA0+xZQNPoWUDT4FlAoSwFXAGhnSCEMNQEyBjUCQgI4SCELNAESRDQESSISTDQCEhFEKGQ1A0k1BRc1/4AEcO3vejT/FlCwNAMxABJEQgHsSSEGDEABDEkhCQxAAKdJIQoMQABdSCEKNAESRDQESSISTDQCEhFEKGRJNQNXICA1/0k1BRc1/oAEgaqazzT+FlCwNANXACAxABJEsSKyATQDJFuyCCOyEDT/sgezNP8oSwFXACBnSCELNQEyBjUCQgGWIQkSRCEJNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEp2XEtLA0/zEAEkQ0/zQDVyAgNAMkWzQDJVsiIjIGIkIA3EghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/1cgIDX+JFs1/Uk1BRc1/IAEl073FzT8FlCwNP8xABJENP80/lA0/RZQNPwWUChLAVcAUGdIIQk1ATIGNQJCAPVJIwxAAEVIIzQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQUXNf6ABNUVGRQ0/hZQsDT/MQBQNP4WUChLAVcASGdIIQY1ATIGNQJCAKpIIjQBEkQ0BEkiEkw0AhIRRIAEXw2r+rCBoI0GiADIMQAoSwFXACBnSCM1ATIGNQJCAHc1/zX+Nf01/DX7Nfo1+TX4NP0iEkEAKDT4NPlQNPoWUDT7FlA0/BZQNP8WUChLAVcAYGdIIQc1ATIGNQJCADg0+DT5UDT/FlAoSwFXAEhnSCEKNQEyBjUCQgAcMRkhChJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 105,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v265",
                "type": "bool"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v273",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v253",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v188",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v265",
                "type": "bool"
              }
            ],
            "internalType": "struct T26",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T27",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v273",
                "type": "uint256"
              }
            ],
            "internalType": "struct T28",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T29",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v197",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v288",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v301",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v225",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v253",
                "type": "bool"
              },
              {
                "internalType": "uint256",
                "name": "v254",
                "type": "uint256"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200218f3803806200218f8339810160408190526200002691620001a4565b600080554360035560408051338152825160208083019190915283015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008334156007620000d4565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000cb929190620000fe565b5050506200024c565b81620000fa5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200010c906200020f565b90600052602060002090601f0160209004810192826200013057600085556200017b565b82601f106200014b57805160ff19168380011785556200017b565b828001600101855582156200017b579182015b828111156200017b5782518255916020019190600101906200015e565b50620001899291506200018d565b5090565b5b808211156200018957600081556001016200018e565b600060408284031215620001b757600080fd5b604080519081016001600160401b0381118282101715620001e857634e487b7160e01b600052604160045260246000fd5b60405282518152602083015180151581146200020357600080fd5b60208201529392505050565b600181811c908216806200022457607f821691505b602082108114156200024657634e487b7160e01b600052602260045260246000fd5b50919050565b611f33806200025c6000396000f3fe6080604052600436106100bd5760003560e01c806379aba12311610079578063980b6eac11610056578063980b6eac14610184578063aad3415714610197578063ab53f2c6146101aa578063e533a29d146101cd57005b806379aba12314610149578063832307571461015c578063873779a11461017157005b8063042730d7146100c65780631e93b0f1146100d957806345f70396146100fd578063552d7b8e146101105780636cec5d461461012357806373b4522c1461013657005b366100c457005b005b6100c46100d436600461188c565b6101e0565b3480156100e557600080fd5b506003545b6040519081526020015b60405180910390f35b6100c461010b36600461188c565b6104ec565b6100c461011e36600461188c565b6106af565b6100c461013136600461188c565b610854565b6100c461014436600461188c565b610a7c565b6100c461015736600461188c565b610c11565b34801561016857600080fd5b506001546100ea565b6100c461017f36600461188c565b610e7c565b6100c461019236600461188c565b610fdd565b6100c46101a53660046118af565b61111f565b3480156101b657600080fd5b506101bf611317565b6040516100f49291906118c1565b6100c46101db36600461188c565b6113b4565b6101f0600c6000541460306115c6565b61020a8135158061020357506001548235145b60316115c6565b60008080556002805461021c9061191e565b80601f01602080910402602001604051908101604052809291908181526020018280546102489061191e565b80156102955780601f1061026a57610100808354040283529160200191610295565b820191906000526020600020905b81548152906001019060200180831161027857829003601f168201915b50505050508060200190518101906102ad919061197d565b90507f1dc5544514ba94425d58f6bb92e7d14ae74289c6e17bbbc41c92cb16fa8304dd33836040516102e0929190611a33565b60405180910390a16102f43415602e6115c6565b805161030c906001600160a01b03163314602f6115c6565b6040810151602083013510610475578060e00151156103f757805160c08201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610362573d6000803e3d6000fd5b5061036b611723565b815181516001600160a01b0391821690526020808401518351921691015260408083015182519091015260608083015182519091015260808201516103b290600190611a70565b602080830180519290925281516000910152514360409091015260c082015160a08301516103e09190611a88565b6020820151606001526103f2816115eb565b505050565b6103ff611723565b815181516001600160a01b03918216905260208084015183519216910152604080830151825190910152606080830151825190910152608082015161044690600190611a70565b60208083018051929092528151600091015280514360409091015260a08301519051606001526103f2816115eb565b61047d611723565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015260808501518385018051919091528051600194019390935282514392019190915260a0840151915101526103f2816115eb565b5050565b6104fc600260005414600d6115c6565b6105168135158061050f57506001548235145b600e6115c6565b6000808055600280546105289061191e565b80601f01602080910402602001604051908101604052809291908181526020018280546105549061191e565b80156105a15780601f10610576576101008083540402835291602001916105a1565b820191906000526020600020905b81548152906001019060200180831161058457829003601f168201915b50505050508060200190518101906105b99190611b15565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516105ec929190611a33565b60405180910390a16106003415600b6115c6565b8051610618906001600160a01b03163314600c6115c6565b61062061176b565b81516001600160a01b0390811680835260208085015183168185019081526040808701518187019081528884013560608089019182526003600055436001558351958601969096529251909516908301529251918101919091529051608082015260a0015b604051602081830303815290604052600290805190602001906106a99291906117a5565b50505050565b6106bf60056000541460156115c6565b6106d9813515806106d257506001548235145b60166115c6565b6000808055600280546106eb9061191e565b80601f01602080910402602001604051908101604052809291908181526020018280546107179061191e565b80156107645780601f1061073957610100808354040283529160200191610764565b820191906000526020600020905b81548152906001019060200180831161074757829003601f168201915b505050505080602001905181019061077c9190611b15565b90507f643bb8428ae07277421f7600c8b7dc078704f1cfd6d7aaedbe23c2d5754675d333836040516107af929190611a33565b60405180910390a16107c3341560136115c6565b80516107db906001600160a01b0316331460146115c6565b80602001516001600160a01b03166108fc82604001519081150290604051600060405180830381858888f1935050505015801561081c573d6000803e3d6000fd5b5060408051602080820183526000808352848201516001600160a01b0316808452600690915543600155835191820152909101610685565b610864600860005414601e6115c6565b61087e8135158061087757506001548235145b601f6115c6565b6000808055600280546108909061191e565b80601f01602080910402602001604051908101604052809291908181526020018280546108bc9061191e565b80156109095780601f106108de57610100808354040283529160200191610909565b820191906000526020600020905b8154815290600101906020018083116108ec57829003601f168201915b50505050508060200190518101906109219190611bc5565b90506109396040518060200160405280600081525090565b7fcf1141db81cf673bada35f0f89f1438399a69251ff5f66f15c1433b39ac0ad74338460405161096a929190611a33565b60405180910390a161097e3415601b6115c6565b8151610996906001600160a01b03163314601c6115c6565b6109bc600060026109a943600019611a88565b6109b39190611a88565b1015601d6115c6565b6109c7600243611a70565b81526040805160e081018252600080825260208083018281528385018381526060808601858152608080880187815260a0808a0189815260c08b018a81528e516001600160a01b039081168d528f8b0151169098528d8c0151909652938c01519092528a0151905288015190528551905260099091554360015591519091610a5191839101611be1565b60405160208183030381529060405260029080519060200190610a759291906117a5565b5050505050565b610a8c60036000541460116115c6565b610aa681351580610a9f57506001548235145b60126115c6565b600080805560028054610ab89061191e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ae49061191e565b8015610b315780601f10610b0657610100808354040283529160200191610b31565b820191906000526020600020905b815481529060010190602001808311610b1457829003601f168201915b5050505050806020019051810190610b499190611c3a565b90507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c63383604051610b7c929190611cba565b60405180910390a1610b903415600f6115c6565b8051610ba8906001600160a01b0316331460106115c6565b610bb0611723565b815181516001600160a01b03918216905260208084015183519216918101919091526040808401518351820152606080850151845182015282840180516000908190528151909401849052805143930192909252905101526103f2816115eb565b610c21600b60005414602c6115c6565b610c3b81351580610c3457506001548235145b602d6115c6565b600080805560028054610c4d9061191e565b80601f0160208091040260200160405190810160405280929190818152602001828054610c799061191e565b8015610cc65780601f10610c9b57610100808354040283529160200191610cc6565b820191906000526020600020905b815481529060010190602001808311610ca957829003601f168201915b5050505050806020019051810190610cde9190611d90565b90507f23ab25ff90ab175f27c06d9c6f572bd8c6711034b3bf4029a9427fb5a21a29cc3383604051610d11929190611cba565b60405180910390a1610d253415602a6115c6565b6020810151610d40906001600160a01b03163314602b6115c6565b610d9c60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000151581525090565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151908401526080808501519084015260a0808501519084015260c08085015190840152610df991908501908501611dac565b151560e0820152600c6000554360015560405161068590829060200160006101008201905060018060a01b038084511683528060208501511660208401525060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151151560e083015292915050565b610e8c60016000541460096115c6565b610ea681351580610e9f57506001548235145b600a6115c6565b600080805560028054610eb89061191e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee49061191e565b8015610f315780601f10610f0657610100808354040283529160200191610f31565b820191906000526020600020905b815481529060010190602001808311610f1457829003601f168201915b5050505050806020019051810190610f499190611e23565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610f7c929190611a33565b60405180910390a1610f90341560086115c6565b604080516060810182526000808252602080830182815283850183815286516001600160a01b03168552339091528682013590526002909155436001559151909161068591839101611e3f565b610fed60066000541460196115c6565b6110078135158061100057506001548235145b601a6115c6565b6000808055600280546110199061191e565b80601f01602080910402602001604051908101604052809291908181526020018280546110459061191e565b80156110925780601f1061106757610100808354040283529160200191611092565b820191906000526020600020905b81548152906001019060200180831161107557829003601f168201915b50505050508060200190518101906110aa9190611e23565b90507fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33836040516110dd929190611a33565b60405180910390a16110f1341560176115c6565b8051611109906001600160a01b0316331460186115c6565b600080805560018190556104e890600290611829565b61112f600a6000541460286115c6565b6111498135158061114257506001548235145b60296115c6565b60008080556002805461115b9061191e565b80601f01602080910402602001604051908101604052809291908181526020018280546111879061191e565b80156111d45780601f106111a9576101008083540402835291602001916111d4565b820191906000526020600020905b8154815290600101906020018083116111b757829003601f168201915b50505050508060200190518101906111ec9190611bc5565b90507f30c96b678dbc8064e332b1e773953fe2984e1d4bbe98befef52e2a8c1d851888338360405161121f929190611e6e565b60405180910390a1611233341560256115c6565b805161124b906001600160a01b0316331460266115c6565b60a0810151611262906040840135111560276115c6565b6112b46040518060e0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151908401526080808501519084015260a080850151908401528481013560c0840152600b600055436001555161068591839101611be1565b60006060600054600280805461132c9061191e565b80601f01602080910402602001604051908101604052809291908181526020018280546113589061191e565b80156113a55780601f1061137a576101008083540402835291602001916113a5565b820191906000526020600020905b81548152906001019060200180831161138857829003601f168201915b50505050509050915091509091565b6113c460096000541460226115c6565b6113de813515806113d757506001548235145b60236115c6565b6000808055600280546113f09061191e565b80601f016020809104026020016040519081016040528092919081815260200182805461141c9061191e565b80156114695780601f1061143e57610100808354040283529160200191611469565b820191906000526020600020905b81548152906001019060200180831161144c57829003601f168201915b50505050508060200190518101906114819190611d90565b90506114996040518060200160405280600081525090565b6114ab8260c0015143101560246115c6565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb6077633846040516114dc929190611cba565b60405180910390a181606001518260a001516114f89190611a70565b8152606082015161150c90341460206115c6565b8151611524906001600160a01b0316331460216115c6565b61156f6040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b82516001600160a01b03908116825260208085015190911681830152604080850151818401526060808601519084015260808086015190840152835160a0840152600a6000554360015551610a5191839101611eb0565b816104e85760405163100960cb60e01b81526004810182905260240160405180910390fd5b60208082015101516116c6576116426040518060c0016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8151516001600160a01b039081168252825160209081015190911681830152825160409081015181840152835160609081015181850152828501805151608086015251015160a0840152600860005543600155516116a291839101611eb0565b604051602081830303815290604052600290805190602001906103f29291906117a5565b6040805160608082018352600080835260208084018281528486018381528751516001600160a01b03908116875288518401511690915286820151909301519092526005905543600155915190916116a291839101611e3f565b50565b604051806040016040528061173661176b565b81526020016117666040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b604051806080016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081525090565b8280546117b19061191e565b90600052602060002090601f0160209004810192826117d35760008555611819565b82601f106117ec57805160ff1916838001178555611819565b82800160010185558215611819579182015b828111156118195782518255916020019190600101906117fe565b5061182592915061185f565b5090565b5080546118359061191e565b6000825580601f10611845575050565b601f01602090049060005260206000209081019061172091905b5b808211156118255760008155600101611860565b60006040828403121561188657600080fd5b50919050565b60006040828403121561189e57600080fd5b6118a88383611874565b9392505050565b60006060828403121561188657600080fd5b82815260006020604081840152835180604085015260005b818110156118f5578581018301518582016060015282016118d9565b81811115611907576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061193257607f821691505b6020821081141561188657634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461196a57600080fd5b919050565b801515811461172057600080fd5b600061010080838503121561199157600080fd5b6040519081019067ffffffffffffffff821181831017156119c257634e487b7160e01b600052604160045260246000fd5b816040526119cf84611953565b81526119dd60208501611953565b602082015260408401516040820152606084015160608201526080840151608082015260a084015160a082015260c084015160c082015260e08401519150611a248261196f565b60e08101919091529392505050565b6001600160a01b0383168152606081016118a8602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115611a8357611a83611a5a565b500190565b600082821015611a9a57611a9a611a5a565b500390565b600060608284031215611ab157600080fd5b6040516060810181811067ffffffffffffffff82111715611ae257634e487b7160e01b600052604160045260246000fd5b604052905080611af183611953565b8152611aff60208401611953565b6020820152604083015160408201525092915050565b600060608284031215611b2757600080fd5b6118a88383611a9f565b600060c08284031215611b4357600080fd5b60405160c0810181811067ffffffffffffffff82111715611b7457634e487b7160e01b600052604160045260246000fd5b604052905080611b8383611953565b8152611b9160208401611953565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201525092915050565b600060c08284031215611bd757600080fd5b6118a88383611b31565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e081015b92915050565b600060808284031215611c4c57600080fd5b6040516080810181811067ffffffffffffffff82111715611c7d57634e487b7160e01b600052604160045260246000fd5b604052611c8983611953565b8152611c9760208401611953565b602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135611ce28161196f565b8015156040840152509392505050565b600060e08284031215611d0457600080fd5b60405160e0810181811067ffffffffffffffff82111715611d3557634e487b7160e01b600052604160045260246000fd5b604052905080611d4483611953565b8152611d5260208401611953565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201525092915050565b600060e08284031215611da257600080fd5b6118a88383611cf2565b600060208284031215611dbe57600080fd5b81356118a88161196f565b600060208284031215611ddb57600080fd5b6040516020810181811067ffffffffffffffff82111715611e0c57634e487b7160e01b600052604160045260246000fd5b604052905080611e1b83611953565b905292915050565b600060208284031215611e3557600080fd5b6118a88383611dc9565b81516001600160a01b039081168252602080840151909116908201526040808301519082015260608101611c34565b6001600160a01b038316815281356020808301919091526080820190830135611e968161196f565b801515604084015250604083013560608301529392505050565b81516001600160a01b0390811682526020808401519091169082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c08101611c3456fea26469706673582212203325c9c0bf46b678431dfcfbcb8f85d518f59ec5af67bcb0cae689b3e89f4e7864736f6c634300080c0033`,
  BytecodeLen: 8591,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:31:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:40:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:48:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:144:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:150:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:165:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:75:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:89:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:97:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:105:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:114:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "InsuranceCompany": InsuranceCompany,
  "Subscriber": Subscriber
  };
export const _APIs = {
  };

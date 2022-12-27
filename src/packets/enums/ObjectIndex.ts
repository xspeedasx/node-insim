export enum ObjectIndex {
  AXO_NULL,
  AXO_1,
  AXO_2,
  AXO_3,
  AXO_CHALK_LINE,
  AXO_CHALK_LINE2,
  AXO_CHALK_AHEAD,
  AXO_CHALK_AHEAD2,
  AXO_CHALK_LEFT,
  AXO_CHALK_LEFT2,
  AXO_CHALK_LEFT3,
  AXO_CHALK_RIGHT,
  AXO_CHALK_RIGHT2,
  AXO_CHALK_RIGHT3,
  AXO_14,
  AXO_15,
  AXO_16,
  AXO_17,
  AXO_18,
  AXO_19,
  AXO_CONE_RED,
  AXO_CONE_RED2,
  AXO_CONE_RED3,
  AXO_CONE_BLUE,
  AXO_CONE_BLUE2,
  AXO_CONE_GREEN,
  AXO_CONE_GREEN2,
  AXO_CONE_ORANGE,
  AXO_CONE_WHITE,
  AXO_CONE_YELLOW,
  AXO_CONE_YELLOW2,
  AXO_31,
  AXO_32,
  AXO_33,
  AXO_34,
  AXO_35,
  AXO_36,
  AXO_37,
  AXO_38,
  AXO_39,
  AXO_CONE_PTR_RED,
  AXO_CONE_PTR_BLUE,
  AXO_CONE_PTR_GREEN,
  AXO_CONE_PTR_YELLOW,
  AXO_44,
  AXO_45,
  AXO_46,
  AXO_47,
  AXO_TYRE_SINGLE,
  AXO_TYRE_STACK2,
  AXO_TYRE_STACK3,
  AXO_TYRE_STACK4,
  AXO_TYRE_SINGLE_BIG,
  AXO_TYRE_STACK2_BIG,
  AXO_TYRE_STACK3_BIG,
  AXO_TYRE_STACK4_BIG,
  AXO_56,
  AXO_57,
  AXO_58,
  AXO_59,
  AXO_60,
  AXO_61,
  AXO_62,
  AXO_63,
  AXO_MARKER_CURVE_L,
  AXO_MARKER_CURVE_R,
  AXO_MARKER_L,
  AXO_MARKER_R,
  AXO_MARKER_HARD_L,
  AXO_MARKER_HARD_R,
  AXO_MARKER_L_R,
  AXO_MARKER_R_L,
  AXO_MARKER_S_L,
  AXO_MARKER_S_R,
  AXO_MARKER_S2_L,
  AXO_MARKER_S2_R,
  AXO_MARKER_U_L,
  AXO_MARKER_U_R,
  AXO_78,
  AXO_79,
  AXO_80,
  AXO_81,
  AXO_82,
  AXO_83,
  AXO_DIST25,
  AXO_DIST50,
  AXO_DIST75,
  AXO_DIST100,
  AXO_DIST125,
  AXO_DIST150,
  AXO_DIST200,
  AXO_DIST250,
  AXO_92,
  AXO_93,
  AXO_94,
  AXO_95,
  AXO_ARMCO1,
  AXO_ARMCO3,
  AXO_ARMCO5,
  AXO_99,
  AXO_100,
  AXO_101,
  AXO_102,
  AXO_103,
  AXO_BARRIER_LONG,
  AXO_BARRIER_RED,
  AXO_BARRIER_WHITE,
  AXO_107,
  AXO_108,
  AXO_109,
  AXO_110,
  AXO_111,
  AXO_BANNER1,
  AXO_BANNER2,
  AXO_114,
  AXO_115,
  AXO_116,
  AXO_117,
  AXO_118,
  AXO_119,
  AXO_RAMP1,
  AXO_RAMP2,
  AXO_122,
  AXO_123,
  AXO_124,
  AXO_125,
  AXO_126,
  AXO_127,
  AXO_SPEED_HUMP_10M,
  AXO_SPEED_HUMP_6M,
  AXO_130,
  AXO_131,
  AXO_132,
  AXO_133,
  AXO_134,
  AXO_135,
  AXO_POST_GREEN,
  AXO_POST_ORANGE,
  AXO_POST_RED,
  AXO_POST_WHITE,
  AXO_140,
  AXO_141,
  AXO_142,
  AXO_143,
  AXO_BALE,
  AXO_145,
  AXO_146,
  AXO_147,
  AXO_RAILING,
  AXO_START_LIGHTS,
  AXO_150,
  AXO_151,
  AXO_152,
  AXO_153,
  AXO_154,
  AXO_155,
  AXO_156,
  AXO_157,
  AXO_158,
  AXO_159,
  AXO_SIGN_KEEP_LEFT,
  AXO_SIGN_KEEP_RIGHT,
  AXO_162,
  AXO_163,
  AXO_164,
  AXO_165,
  AXO_166,
  AXO_167,
  AXO_SIGN_SPEED_80,
  AXO_SIGN_SPEED_50,
  AXO_170,
  AXO_171,
  AXO_CONCRETE_SLAB,
  AXO_CONCRETE_RAMP,
  AXO_CONCRETE_WALL,
  AXO_CONCRETE_PILLAR,
  AXO_CONCRETE_SLAB_WALL,
  AXO_CONCRETE_RAMP_WALL,
  AXO_CONCRETE_SHORT_SLAB_WALL,
  AXO_CONCRETE_WEDGE,
  AXO_180,
  AXO_181,
  AXO_182,
  AXO_183,
  AXO_START_POSITION,
  AXO_PIT_START_POINT,
  AXO_PIT_STOP_BOX,
  AXO_187,
  AXO_188,
  AXO_189,
  AXO_190,
  AXO_191,

  /** Special value to override the main start light system */
  OCO_INDEX_MAIN = 240,

  /** InSim checkpoint */
  MARSH_IS_CP = 252,

  /** InSim circle */
  MARSH_IS_AREA = 253,

  /** Restricted area */
  MARSH_MARSHAL = 254,

  /** Route checker */
  MARSH_ROUTE = 255,
}

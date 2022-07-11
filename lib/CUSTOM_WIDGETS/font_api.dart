import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';

import 'color_constant.dart';

class FONT_CONST {
  static final LIGHT = TextStyle(
      fontFamily: 'PoppingsRegular',
      fontWeight: FontWeight.w300,
      color: COLOR_CONST.colorBlack);

  static final REGULAR = TextStyle(
      fontFamily: 'PoppingsRegular',
      fontWeight: FontWeight.w400,
      color: COLOR_CONST.colorBlack);

  static final BOLD = TextStyle(
      fontFamily: 'PoppinsBolds',
      fontWeight: FontWeight.w700,
      color: COLOR_CONST.colorBlack);

  static final SEMIBOLD = TextStyle(
      fontFamily: 'PoppingsSemiBold',
      fontWeight: FontWeight.w600,
      color: COLOR_CONST.colorBlack);

  static final MEDIUM = TextStyle(
      fontFamily: 'PoppingsMedium',
      fontWeight: FontWeight.w500,
      color: COLOR_CONST.colorBlack);

  static final BLACK = TextStyle(
      fontFamily: 'PoppingsBlack',
      fontWeight: FontWeight.w500,
      color: COLOR_CONST.colorBlack);

  static final AVENTURE_BOLD = TextStyle(
      fontFamily: 'AventuraBold',
      fontWeight: FontWeight.w700,
      color: COLOR_CONST.colorBlack);
  static final KUNO = TextStyle(
      fontFamily: 'Kuno',
      fontWeight: FontWeight.w400,
      color: COLOR_CONST.colorBlack);

  static final LAUM_BOLD = TextStyle(
      fontFamily: 'LaumBold',
      fontWeight: FontWeight.w700,
      color: COLOR_CONST.colorBlack);
  static final LAUM_LIGHT = TextStyle(
      fontFamily: 'LaumLight',
      fontWeight: FontWeight.w300,
      color: COLOR_CONST.colorBlack);
  static final LAUM_REGULAR = TextStyle(
      fontFamily: 'LaumRegular',
      fontWeight: FontWeight.w400,
      color: COLOR_CONST.colorBlack);

  static final RONDAL_BOLD = TextStyle(
      fontFamily: 'RondalBold',
      fontWeight: FontWeight.w900,
      color: COLOR_CONST.colorBlack);
  static final RONDAL_REGULAR = TextStyle(
      fontFamily: 'RondalRegular',
      fontWeight: FontWeight.w300,
      color: COLOR_CONST.colorBlack);
  static final RONDAL_SEMI_BOLD = TextStyle(
      fontFamily: 'RondalSemiBold',
      fontWeight: FontWeight.w400,
      color: COLOR_CONST.colorBlack);

  static final MEDIUM_TEXT_BLACK = MEDIUM.copyWith(color: COLOR_CONST.coloBTN);
  static final MEDIUM_TEXT_BLACK_12 = MEDIUM_TEXT_BLACK.copyWith(fontSize: 12);
  static final MEDIUM_TEXT_BLACK_17 = MEDIUM_TEXT_BLACK.copyWith(fontSize: 17);
  static final MEDIUM_TEXT_BLACK_16 = MEDIUM_TEXT_BLACK.copyWith(fontSize: 16);

  static final MEDIUM_TEXT_WHITE =
      MEDIUM.copyWith(color: COLOR_CONST.colorWhite);
  static final MEDIUM_TEXT_WHITE_12 = MEDIUM_TEXT_WHITE.copyWith(fontSize: 12);
  static final MEDIUM_TEXT_WHITE_15 = MEDIUM_TEXT_WHITE.copyWith(fontSize: 15);
  static final MEDIUM_TEXT_WHITE_16 = MEDIUM_TEXT_WHITE.copyWith(fontSize: 16);

  static final BLACK_FONT_TEXT = MEDIUM.copyWith(color: COLOR_CONST.coloBTN);
  static final BLACK_FONT_TEXT_14 = BLACK_FONT_TEXT.copyWith(fontSize: 14);

  static final REGULAR_FONT_TEXT =
      REGULAR.copyWith(color: COLOR_CONST.colorLightGrey);
  static final REGULAR_FONT_TEXT_12 = REGULAR_FONT_TEXT.copyWith(fontSize: 12);

  static final BOLD_FONT_TEXT = BOLD.copyWith(color: COLOR_CONST.colorBlack);
  static final BOLD_FONT_TEXT_18 = BOLD_FONT_TEXT.copyWith(fontSize: 18);

  //KANO
  static final KUNO_TEXT = KUNO.copyWith(color: COLOR_CONST.dartTextColor);
  static final KUNO_TEXT_12 = KUNO_TEXT.copyWith(fontSize: 12);
  static final KUNO_TEXT_14 = KUNO_TEXT.copyWith(fontSize: 14);

  //KANO LIGHT TEXT
  static final KUNO_TEXT_LIGHT =
      KUNO.copyWith(color: COLOR_CONST.lightTextColor);
  static final KUNO_TEXT_12_LIGHT = KUNO_TEXT_LIGHT.copyWith(fontSize: 12.sp);
  static final KUNO_TEXT_14_LIGHT = KUNO_TEXT_LIGHT.copyWith(fontSize: 14.sp);

  //LUAM
  static final LUAM_BOLD_TEXT =
      LAUM_BOLD.copyWith(color: COLOR_CONST.dartTextColor);
  static final LUAM_BOLD_TEXT_16 = LUAM_BOLD_TEXT.copyWith(fontSize: 16);
  static final LUAM_BOLD_TEXT_20 = LUAM_BOLD_TEXT.copyWith(fontSize: 20);
  static final LUAM_BOLD_TEXT_26 = LUAM_BOLD_TEXT.copyWith(fontSize: 26);
  static final LUAM_BOLD_TEXT_10 = LUAM_BOLD_TEXT.copyWith(fontSize: 10);

  static final LUAM_BOLD_LIGHT_TEXT_14 =
      LUAM_BOLD_TEXT.copyWith(fontSize: 14, color: COLOR_CONST.textLightColor);
  static final LUAM_BOLD_DARK_TEXT_18 =
      LUAM_BOLD_TEXT.copyWith(fontSize: 18, color: COLOR_CONST.priceDarkColor);
  static final LUAM_BOLD_DARK_TEXT_18_decorectuion = LUAM_BOLD_TEXT.copyWith(
    fontSize: 18,
    color: COLOR_CONST.priceDarkColor,
    decorationColor: COLOR_CONST.colorLightGrey,
    decorationStyle: TextDecorationStyle.solid,
    decoration: TextDecoration.lineThrough,
  );
  static final LUAM_BOLD_DARK_TEXT_16 =
      LUAM_BOLD_TEXT.copyWith(fontSize: 16, color: COLOR_CONST.priceDarkColor);
  static final LUAM_BOLD_DARK_TEXT_20 =
      LUAM_BOLD_TEXT.copyWith(fontSize: 20, color: COLOR_CONST.priceDarkColor);

  //RONDAL
  static final RONDAL_BOLD_TEXT =
      RONDAL_BOLD.copyWith(color: COLOR_CONST.dartTextColor);
  static final RONDAL_BOLD_TEXT_24 = RONDAL_BOLD_TEXT.copyWith(fontSize: 24);
  static final RONDAL_BOLD_TEXT_16 = RONDAL_BOLD_TEXT.copyWith(fontSize: 16);

  //Luam Light
  static final LUAM_REGULAR_TEXT =
      LAUM_REGULAR.copyWith(color: COLOR_CONST.PRIMARY_COLOR);
  static final LUAM_REGULAR_TEXT_16 = LUAM_REGULAR_TEXT.copyWith(fontSize: 16);

  static final LUAM_BOLD_DARK_TEXT_26 =
      LUAM_BOLD_TEXT.copyWith(fontSize: 26, color: COLOR_CONST.priceDarkColor);
}

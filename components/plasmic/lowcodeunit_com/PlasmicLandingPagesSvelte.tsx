// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bNJjNc2NbC4jfBdycy75o8
// Component: UZaPkpLSomxt
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: ThexOuedbks1/component
import Button from "../../Button"; // plasmic-import: 9tG1OyZAVIis/component
import ValueProp from "../../ValueProp"; // plasmic-import: 7Osq_1lpBJMp/component
import PriceCard from "../../PriceCard"; // plasmic-import: 7SzxSSEbWsst/component
import FooterSection from "../../FooterSection"; // plasmic-import: iXxSJX956e4d/component

import { useScreenVariants as useScreenVariantsxs8LqfxZhwLy } from "../landing_page_starter/PlasmicGlobalVariant__Screen"; // plasmic-import: XS8lqfxZhwLY/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import * as projectcss from "../landing_page_starter/plasmic_landing_page_starter.module.css"; // plasmic-import: bNJjNc2NbC4jfBdycy75o8/projectcss
import * as sty from "./PlasmicLandingPagesSvelte.module.css"; // plasmic-import: UZaPkpLSomxt/css

import AppleIcon from "../landing_page_starter/icons/PlasmicIcon__Apple"; // plasmic-import: MwxVTyBYf-O_/icon
import HammerIcon from "../landing_page_starter/icons/PlasmicIcon__Hammer"; // plasmic-import: ePabL_LXTnk1/icon
import TargetIcon from "../landing_page_starter/icons/PlasmicIcon__Target"; // plasmic-import: EMtLeGl57bmd/icon
import FastIcon from "../landing_page_starter/icons/PlasmicIcon__Fast"; // plasmic-import: WqD9rzKB0T2b/icon
import StrongIcon from "../landing_page_starter/icons/PlasmicIcon__Strong"; // plasmic-import: FK_DHr1NmIMb/icon
import CheckIcon from "../landing_page_starter/icons/PlasmicIcon__Check"; // plasmic-import: ilXNZMoWvbmT/icon

export type PlasmicLandingPagesSvelte__VariantMembers = {};

export type PlasmicLandingPagesSvelte__VariantsArgs = {};
type VariantPropType = keyof PlasmicLandingPagesSvelte__VariantsArgs;
export const PlasmicLandingPagesSvelte__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLandingPagesSvelte__ArgsType = {};
type ArgPropType = keyof PlasmicLandingPagesSvelte__ArgsType;
export const PlasmicLandingPagesSvelte__ArgProps = new Array<ArgPropType>();

export type PlasmicLandingPagesSvelte__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  foreground2?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  footerSection?: p.Flex<typeof FooterSection>;
};

export interface DefaultLandingPagesSvelteProps {
  dataFetches: PlasmicLandingPagesSvelte__Fetches;
}

function PlasmicLandingPagesSvelte__RenderFunc(props: {
  variants: PlasmicLandingPagesSvelte__VariantsArgs;
  args: PlasmicLandingPagesSvelte__ArgsType;
  overrides: PlasmicLandingPagesSvelte__OverridesType;
  dataFetches?: PlasmicLandingPagesSvelte__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsxs8LqfxZhwLy()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Landing Pages - Svelte"}</title>
        <meta
          key="og:title"
          property="og:title"
          content={"Landing Pages - Svelte"}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___0Xzr3)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jkzNv
                )}
              >
                {"Svelte Deployments\nwith LowCodeUnit"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___38JFm
                )}
              >
                {
                  "Create, build, and deploy your next Svelte app with LowCodeUnit"
                }
              </div>
            </p.Stack>

            <p.PlasmicImg
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"293px" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/lowcodeunit_com/images/image10.png",
                fullWidth: 1702,
                fullHeight: 2049,
                aspectRatio: undefined
              }}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <div className={classNames(projectcss.all, sty.columns__et1IW)}>
                <div className={classNames(projectcss.all, sty.column___2Tx0F)}>
                  <Button
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames("__wab_instance", sty.button)}
                    color={"darkGray" as const}
                    link={"/dashboard" as const}
                  >
                    {"Get started for free"}
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column__nEuLp)}>
                  <p.PlasmicLink
                    data-plasmic-name={"link"}
                    data-plasmic-override={overrides.link}
                    className={classNames(
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link
                    )}
                    component={Link}
                    href={"/docs/guides/hosting/frameworks/svelte" as const}
                    platform={"nextjs"}
                  >
                    {"Learn more >"}
                  </p.PlasmicLink>
                </div>
              </div>
            </p.Stack>
          </p.Stack>

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__dg2Nu)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__w2HfO)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Why deploy Svelte?"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xr5Ou
                  )}
                >
                  {
                    "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.\n\nInstead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of your app changes."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bRkGj)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__kwDof)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__rBoXb)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__ugal
                        )}
                        darkBackground={"darkBackground" as const}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__qom4V
                            )}
                          >
                            {
                              "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                            }
                          </div>
                        }
                        icon={
                          <HammerIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___3WzL
                            )}
                            role={"img"}
                          />
                        }
                        title={"Harder"}
                        vertical={"vertical" as const}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__ad7TI)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__fZs74
                        )}
                        darkBackground={"darkBackground" as const}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___3QoFh
                            )}
                          >
                            {
                              "Consequat scelerisque a eros taciti nisl a sodales."
                            }
                          </div>
                        }
                        icon={
                          <TargetIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg___1Z9VW
                            )}
                            role={"img"}
                          />
                        }
                        title={"Better"}
                        vertical={"vertical" as const}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__qEkPn)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__oldsC
                        )}
                        darkBackground={"darkBackground" as const}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__vHmH0
                            )}
                          >
                            {
                              "Varius ad malesuada ullamcorper cursus scelerisque a a."
                            }
                          </div>
                        }
                        icon={
                          <FastIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__fuI9A
                            )}
                            role={"img"}
                          />
                        }
                        title={"Faster"}
                        vertical={"vertical" as const}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__vcc3P)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__hPEt4
                        )}
                        darkBackground={"darkBackground" as const}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___7QAuP
                            )}
                          >
                            {
                              "Ut eu nam nostra taciti congue adipiscing curabitur."
                            }
                          </div>
                        }
                        icon={
                          <StrongIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__c7Sn1
                            )}
                            role={"img"}
                          />
                        }
                        title={"Stronger"}
                        vertical={"vertical" as const}
                      />
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>
            </p.Stack>
          </section>

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__sXuBs)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__an5Jj)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__l9XOk)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__rwYlc)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tK0S
                      )}
                    >
                      {"Pricing plans"}
                    </div>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__xPnwQ
                    )}
                  >
                    {
                      "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__qpTqb)}
                >
                  <PriceCard
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__nvpAs
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__tIg3L
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__xoi7R
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp___1W8Nz
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__lUncE
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />
                      </React.Fragment>
                    }
                    dollars={"0"}
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__rOasA
                        )}
                      >
                        {"Buy Pro"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__w9ReB
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__qUulf
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__aTxM1
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__a5Gpi
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__oz8Ff
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__yXoom
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__tlLtf
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />
                      </React.Fragment>
                    }
                    dollars={"8"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__x77Pu
                        )}
                      >
                        {"Pro"}
                      </div>
                    }
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qBgEf
                        )}
                      >
                        {"Buy Team"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__dlPgn
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__vQo1Y
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___5Qn8F
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__lQylr
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__edeU8
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__pBnk9
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__gyF
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__ov97W
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___8Buzg
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />
                      </React.Fragment>
                    }
                    dollars={"16"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__zIfwd
                        )}
                      >
                        {"Team"}
                      </div>
                    }
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mfBx
                        )}
                      >
                        {"Contact us"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard___25O3E
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__lWmFk
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__aS9F
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__k63La
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__hJdRw
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__vtMyj
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__lgb1N
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__gBhak
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={"flatIcon" as const}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___1QoM8
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={"noTitle" as const}
                        />
                      </React.Fragment>
                    }
                    dollars={"?"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lVn8C
                        )}
                      >
                        {"Enterprise"}
                      </div>
                    }
                    primary={"primary" as const}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>
          ) : null}

          <FooterSection
            data-plasmic-name={"footerSection"}
            data-plasmic-override={overrides.footerSection}
            className={classNames("__wab_instance", sty.footerSection)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "img",
    "foreground2",
    "button",
    "link",
    "section",
    "foreground3",
    "h2",
    "footerSection"
  ],
  navbar: ["navbar"],
  foreground: ["foreground"],
  img: ["img"],
  foreground2: ["foreground2", "button", "link"],
  button: ["button"],
  link: ["link"],
  section: ["section", "foreground3", "h2"],
  foreground3: ["foreground3", "h2"],
  h2: ["h2"],
  footerSection: ["footerSection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  foreground: "div";
  img: typeof p.PlasmicImg;
  foreground2: "div";
  button: typeof Button;
  link: "a";
  section: "section";
  foreground3: "div";
  h2: "h2";
  footerSection: typeof FooterSection;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLandingPagesSvelte__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLandingPagesSvelte__VariantsArgs;
    args?: PlasmicLandingPagesSvelte__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicLandingPagesSvelte__Fetches;
  } & Omit<PlasmicLandingPagesSvelte__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLandingPagesSvelte__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicLandingPagesSvelte__ArgProps,
      internalVariantPropNames: PlasmicLandingPagesSvelte__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicLandingPagesSvelte__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLandingPagesSvelte";
  } else {
    func.displayName = `PlasmicLandingPagesSvelte.${nodeName}`;
  }
  return func;
}

export const PlasmicLandingPagesSvelte = Object.assign(
  // Top-level PlasmicLandingPagesSvelte renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    img: makeNodeComponent("img"),
    foreground2: makeNodeComponent("foreground2"),
    button: makeNodeComponent("button"),
    link: makeNodeComponent("link"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    footerSection: makeNodeComponent("footerSection"),

    // Metadata about props expected for PlasmicLandingPagesSvelte
    internalVariantProps: PlasmicLandingPagesSvelte__VariantProps,
    internalArgProps: PlasmicLandingPagesSvelte__ArgProps
  }
);

export default PlasmicLandingPagesSvelte;
/* prettier-ignore-end */

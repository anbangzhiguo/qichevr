﻿
var car = [];
var imgList = ["0.png","1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png"];
function paintMap(R,index) {
    var attr = {
        "fill": "#97d6f5",
				"fill-opacity":0,
        "stroke": "#eee",
        "stroke-width": 0,
        "stroke-opacity":0,
        "stroke-linejoin": "round"
    };

    //车每个方向的各部件数据.dataArr表示该部件在每个方位图片上的坐标位置。
    var qichebujian = [
            {
                code:"youqianmen",
                name:"右前门",
                dataArr: [
		                "",
		                "384,235,380,243,377,252,373,262,377,262,382,258,390,258,396,260,398,266,396,272,388,274,382,274,378,269,377,263,374,264,371,282,371,301,372,315,373,333,374,344,375,353,378,363,390,367,469,386,470,367,471,350,470,323,470,300,471,285,473,281,473,272,474,268,478,257,485,247,472,246,472,250,461,258,453,257,437,243,418,240,415,240,384,236,",
		                "424,237,423,249,422,259,422,265,430,265,438,259,448,259,456,260,462,262,469,266,470,270,462,276,445,276,434,271,432,265,421,263,421,282,421,312,421,335,422,346,422,358,423,370,609,385,616,284,616,281,616,273,617,260,617,255,619,246,594,245,600,250,596,255,581,259,570,259,559,246,558,243,542,241,425,235,",
		                "496,234,498,247,501,263,502,266,511,266,517,260,527,258,540,258,554,262,560,268,557,272,542,276,525,276,516,271,512,267,501,266,502,280,503,300,503,324,503,345,503,354,498,373,712,377,718,352,722,324,723,298,723,277,722,256,719,247,715,243,692,243,699,250,695,255,673,257,668,247,658,243,657,241,496,235",
		                "574,235,578,242,584,255,588,265,596,265,603,259,614,258,627,260,638,267,629,275,612,276,599,269,596,266,588,265,590,282,591,300,591,317,590,332,591,340,593,347,581,371,586,372,751,364,761,331,765,303,764,274,761,260,757,248,746,240,739,240,744,249,739,250,723,252,713,239,639,238,574,236,",
		                "637,234,644,246,651,261,652,264,655,264,659,257,668,256,676,263,677,266,674,270,665,273,659,270,656,264,653,265,653,276,655,299,655,315,654,335,654,342,649,355,644,366,727,354,732,340,736,316,738,295,736,268,733,256,730,246,727,241,723,248,715,250,708,243,702,238,637,235",
		                "",
		                "",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                code:"youhoumen",
                name:"右后门",
                dataArr: [
                		"",
		                "384,234,380,244,377,254,374,265,372,282,372,299,371,313,373,329,374,343,376,352,376,362,376,362,344,357,332,352,321,338,312,317,308,304,302,280,300,268,302,257,302,249,305,251,307,258,313,262,320,260,326,256,323,248,317,245,309,247,306,251,300,250,303,244,307,235,307,231,323,221,337,225,364,231,383,234,",
		                "285,221,273,232,270,237,264,250,263,253,279,254,286,249,297,248,312,251,318,258,313,262,300,266,286,264,279,255,264,254,268,264,273,278,286,301,300,330,310,346,317,354,329,361,339,364,371,367,394,369,422,371,421,310,421,266,423,249,425,235,351,228,312,225,284,219,",
                    "313,222,301,235,299,243,297,257,317,257,334,251,348,252,359,254,369,261,361,267,345,268,330,266,325,264,320,258,298,256,308,275,350,338,359,354,369,362,378,368,389,372,416,372,498,374,503,358,503,332,503,302,501,265,496,239,495,235,388,230,312,223,",
                    "405,223,404,236,403,250,405,259,427,258,437,253,461,254,462,255,470,263,463,269,447,271,433,268,429,265,427,260,404,258,416,277,436,308,458,348,470,366,476,371,487,374,498,375,581,373,593,350,590,334,591,299,589,268,580,246,573,235,487,230,426,225,405,223,101,545,",
		                "541,226,545,233,548,236,549,241,551,248,556,259,558,262,569,261,568,257,574,255,582,255,589,258,595,262,591,269,582,270,572,268,568,262,558,260,570,292,584,335,591,368,594,373,599,374,644,368,655,345,656,312,654,286,652,264,642,244,637,234,606,232,542,225,",
		                "",
		                "",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                code:"zuoqianmen",
                name:"左前门",
                dataArr: [
                		"",
		                "",
		                "",
                    "",
                    "",
                    "",
                    "",
		                "315,243,310,251,306,265,304,282,303,298,306,309,306,334,309,354,395,368,388,353,386,347,387,328,387,317,386,294,387,276,389,264,384,264,381,269,372,273,366,271,364,265,366,260,374,256,380,258,385,264,389,264,395,250,398,245,408,235,367,238,339,238,334,238,326,248,322,248,318,248,315,244",
                    "294,240,284,249,280,258,277,277,277,304,279,330,284,348,289,364,291,366,459,373,450,355,450,344,450,333,450,289,452,266,443,267,437,274,425,275,408,274,404,266,414,260,427,259,439,260,444,266,452,267,459,246,467,235,374,238,327,239,324,243,318,253,300,251,298,249,302,241,293,241",
                    "327,242,321,249,318,270,318,303,321,340,324,359,329,376,543,373,537,353,537,349,540,266,527,266,518,273,498,276,483,274,481,269,488,260,509,258,522,261,528,266,538,267,546,235,470,237,413,239,385,241,375,246,371,257,342,253,343,247,349,243,326,243,",
                    "422,244,422,250,423,254,423,260,424,264,430,383,432,385,618,370,620,268,620,264,609,264,608,270,594,277,583,276,571,270,571,265,586,260,596,258,604,261,609,264,619,265,615,234,544,239,500,240,482,247,468,260,446,258,439,249,447,243,422,245,",
                    "556,245,561,253,564,258,568,273,569,283,571,316,571,360,567,385,666,364,669,315,669,282,666,261,663,264,659,271,649,273,641,269,645,261,653,258,659,259,664,264,666,263,660,243,655,233,625,237,624,240,619,241,604,244,587,256,577,257,573,254,568,249,572,244,557,247"
                ]
            },
            {
                code:"zuohoumen",
                name:"左后门",
                dataArr: [
                		"",
		                "",
		                "",
                    "",
                    "",
                    "",
                    "",
		                "405,234,399,245,390,260,389,264,386,294,385,316,387,336,387,345,397,367,439,374,445,373,449,369,459,324,470,290,482,262,472,262,469,268,460,272,450,270,448,263,457,256,465,254,472,261,482,263,493,241,492,237,497,233,499,223,467,230,435,233,407,234,",
                    "467,235,461,244,457,253,453,265,451,282,451,303,450,322,451,333,451,340,451,355,459,374,550,376,560,373,569,369,613,296,634,262,631,259,614,259,604,268,589,271,574,267,572,263,580,257,595,254,606,255,615,259,635,260,638,246,637,232,636,223,555,231,493,234,468,236",
                    "546,235,539,269,537,349,536,354,539,366,542,372,648,372,659,369,672,362,699,325,731,277,745,255,722,257,707,267,692,268,678,268,672,258,684,253,699,251,712,251,722,258,742,258,742,244,739,235,728,222,638,230,584,233,546,235,",
                    "616,235,620,264,620,301,619,371,699,365,710,362,721,356,731,345,760,293,777,254,761,253,753,261,737,264,727,263,724,258,732,250,744,249,754,250,762,254,777,253,770,234,756,222,690,229,616,235,",
                    "657,235,667,263,668,275,670,304,669,329,667,365,705,354,717,344,727,322,732,294,739,269,739,257,738,250,735,250,732,256,726,261,717,257,718,249,724,246,729,246,735,250,740,249,739,244,719,219,703,224,680,229,655,234,"
                ]
            },
            {
                code:"qiangai",
                name:"前盖",
                dataArr: [
                		"379,233,370,232,363,243,354,250,347,266,340,274,343,279,361,292,379,301,410,311,419,303,456,300,521,299,587,301,624,302,629,310,652,306,661,302,684,290,699,280,704,277,687,254,677,246,669,237,658,235,579,237,476,237,407,235,379,233,14,528,",
		                "507,239,505,252,509,255,559,280,617,292,655,302,689,307,695,306,701,300,736,295,830,292,853,294,858,302,863,303,872,293,868,286,865,283,857,274,847,267,836,264,798,244,749,231,717,234,612,236,544,236,517,234,510,232,",
		                "649,234,654,249,662,254,757,277,813,284,861,295,891,299,895,291,934,281,944,280,917,265,867,251,814,240,781,234,761,230,739,232,710,235,686,235,649,234,",
                    "744,229,744,237,757,249,864,270,948,286,948,278,941,270,923,262,876,248,827,240,744,229,",
                    "766,230,776,244,783,249,859,264,876,266,886,271,873,259,854,249,829,242,801,238,766,230,",
                    "",
                    "",
                    "",
                    "276,230,271,239,262,247,181,264,165,265,153,268,181,251,210,241,258,234,274,230,",
                    "298,232,288,247,282,250,176,270,134,275,116,279,106,284,104,287,92,279,95,274,120,260,163,247,208,240,246,235,299,229,",
                    "393,234,390,243,384,251,280,276,183,293,179,295,149,297,147,292,142,290,94,282,102,274,123,264,174,248,228,237,273,231,301,235,344,234,381,235,392,232",
                    "531,234,536,243,534,252,531,257,480,279,402,298,390,302,381,306,351,307,343,299,309,295,304,292,301,291,217,290,212,292,189,294,181,303,177,298,174,290,176,282,185,272,202,263,244,246,272,237,289,230,292,229,295,232,341,235,401,235,462,236,499,235,532,233,",
		                ]
            },
            {
                code:"youqingbaoxiangang",
                name:"右前保险杠",
                dataArr: [
                		"522,356,522,387,444,387,418,385,396,376,366,371,349,368,346,370,338,379,339,392,341,396,389,403,522,410,522,424,432,419,346,413,336,410,333,407,325,345,328,292,330,283,340,273,343,280,336,290,334,306,334,317,338,322,342,321,402,333,404,331,386,305,410,311,430,337,452,348,488,353,",
                		"795,348,797,382,767,382,741,382,707,383,698,381,683,375,638,371,618,371,603,378,595,387,592,394,596,399,658,402,732,402,801,399,800,407,733,414,721,416,683,417,569,413,568,410,561,371,554,343,546,321,568,310,580,321,588,326,594,323,598,323,656,330,681,333,683,330,658,304,690,304,705,330,725,346,755,351,795,348,",
                		"783,304,755,317,771,343,776,366,780,383,780,402,853,401,913,396,917,392,944,385,950,382,959,380,961,376,951,368,940,378,912,385,872,388,818,385,813,383,822,371,830,363,840,359,879,359,886,361,896,365,903,366,952,363,956,340,955,322,945,334,923,334,912,330,892,301,867,298,887,320,866,320,828,317,818,317,810,318,",
                		"889,295,868,308,879,327,885,346,886,370,887,383,892,385,932,379,955,374,962,368,953,361,918,368,915,365,932,343,939,342,951,342,952,346,957,348,958,323,957,313,949,287,935,285,947,308,916,304,911,307,889,295,",
                		"875,283,866,295,872,305,876,318,878,342,877,364,891,361,896,351,894,347,894,341,898,336,899,325,899,313,898,300,894,294,891,295,876,282,",
                		"",
                		"",
                		"",
                    "",
                    "",
                    "",
                    "240,349,245,349,193,337,185,320,183,304,177,300,179,324,164,316,160,320,159,342,159,352,160,368,162,374,163,382,163,390,182,404,193,405,240,409,240,399,196,395,164,381,164,374,161,365,158,355,182,373,214,378,240,382"
                    ]
            },
            {
                code:"zuoqingbaoxiangang",
                name:"左前保险杠",
                dataArr: [
                		"522,356,522,387,582,387,620,386,627,382,644,376,695,369,702,377,704,389,700,395,631,406,570,409,522,410,522,424,612,423,689,415,705,411,714,358,714,311,712,289,708,282,704,279,701,281,708,304,707,317,704,321,700,320,639,333,635,333,642,322,650,311,653,309,631,309,619,331,607,345,598,350,580,355,555,356,523,359,",
                		"795,348,797,382,825,379,857,372,868,363,882,356,879,368,877,382,855,392,802,399,800,407,856,405,871,400,878,387,877,382,877,374,880,369,883,354,881,327,877,313,862,323,862,314,863,303,857,303,851,325,846,334,821,344,",
                		"",
                		"",
                		"",
                		"",
                		"",
                		"",
                    "162,280,173,292,168,306,165,318,163,334,165,363,152,362,144,351,145,348,145,341,142,335,142,328,143,319,143,299,150,296,",
                    "174,308,152,293,136,304,129,306,126,304,121,304,95,308,104,287,103,286,93,279,90,289,86,304,84,346,88,347,93,342,109,342,126,363,124,367,87,363,79,368,82,371,93,375,105,378,154,383,154,359,157,341,161,327,174,308,",
                    "259,304,287,317,278,331,272,340,267,353,264,372,262,389,260,402,212,403,163,400,129,395,123,392,97,386,88,382,82,381,79,376,89,369,98,378,122,384,152,386,223,387,227,384,207,362,199,359,173,360,156,360,141,367,118,366,93,367,83,357,84,324,94,332,109,334,122,332,128,329,149,298,174,296,154,319,156,322,220,316,226,316,230,319,246,313,",
                    "472,310,495,322,485,348,479,371,472,411,425,415,360,415,323,416,314,414,240,409,240,399,310,403,353,403,430,399,443,398,449,395,445,383,429,372,413,370,381,372,365,375,334,384,283,383,240,382,240,349,279,350,307,345,317,340,340,321,348,307,377,307,357,330,358,332,439,323,447,324,451,326,464,318,471,310,"
                    ]
            },
            {
                code:"youhoubaoxiangang",
                name:"右后保险杠",
                dataArr: [
                		"",
                		"253,266,252,282,252,296,254,311,256,320,261,332,267,343,267,328,265,315,266,302,268,292,273,281,255,269,",
                		"213,287,137,273,129,281,129,298,131,310,132,321,132,327,141,343,144,344,192,359,189,339,191,320,199,301,207,292,",
                		"230,295,133,283,125,280,117,269,106,272,91,274,83,291,80,299,80,317,82,329,81,335,79,339,90,358,95,360,192,376,192,358,195,339,200,325,211,307,",
                		"111,300,100,303,99,313,100,349,101,358,107,369,152,379,171,382,187,383,197,382,299,393,305,356,315,330,328,314,343,302,236,293,225,288,213,275,161,285,147,297,125,298,",
                		"251,310,249,315,247,327,244,367,247,375,248,389,279,390,313,393,343,393,391,396,417,397,492,401,500,375,504,356,510,334,517,320,525,305,449,296,435,281,425,285,396,290,365,292,364,292,354,301,338,305,292,307,",
                		"514,397,515,314,560,313,606,309,624,307,634,300,643,291,675,288,694,283,696,281,695,259,698,257,705,281,707,299,709,325,708,357,699,394,616,395,572,396,",
                		"788,310,791,317,791,326,793,366,791,389,818,385,840,383,861,382,879,379,883,374,891,359,891,354,895,324,895,302,892,294,888,288,885,280,876,284,863,286,858,294,851,300,834,305,812,306,",
                    "928,298,939,302,941,314,947,348,937,368,943,366,950,363,955,353,959,351,960,348,961,343,960,337,959,331,960,298,959,293,950,276,947,275,943,287,940,292,",
                    "",
                    "",
                    ""
                    ]
            },
            
            {
                code:"zuohoubaoxiangang",
                name:"左后保险杠",
                dataArr: [
                		"",
                		"",
                		"",
                		"",
                		"111,300,100,303,99,313,100,349,101,358,107,369,97,366,91,363,84,354,81,351,81,348,80,344,82,336,80,309,80,299,82,296,91,277,96,277,101,289,",
                		"251,310,249,315,247,327,244,367,247,375,248,389,219,385,189,384,160,380,152,368,148,359,149,352,144,314,146,298,149,290,155,280,178,286,188,299,204,304,222,305,",
                		"514,397,515,314,481,312,423,308,406,301,396,292,358,288,345,281,346,257,343,256,337,275,333,297,331,329,331,349,334,369,341,394,352,395,402,396,457,396,",
                		"788,310,791,317,791,326,793,366,791,389,743,391,720,393,692,394,660,396,634,397,600,399,573,400,547,399,538,357,529,331,522,316,514,305,586,298,593,295,606,282,628,288,653,291,676,292,684,300,694,304,732,308,758,309,",
                    "928,298,939,302,941,314,947,348,937,368,905,376,887,379,874,382,826,386,743,393,738,368,731,343,718,319,709,311,699,301,699,303,801,292,810,291,816,288,827,276,845,282,865,284,879,285,889,292,897,298,912,298,",
                    "924,269,914,281,908,283,859,291,813,295,817,298,833,313,844,332,850,359,849,377,861,376,921,367,948,361,956,350,958,347,962,339,959,332,961,312,961,298,958,290,950,276,929,270,922,268,",
                    "828,286,842,283,858,279,881,275,887,273,896,262,903,264,907,275,911,282,911,304,909,319,908,328,901,342,894,347,850,360,853,341,851,321,843,301,832,290,",
                    "767,278,778,273,787,263,789,276,789,290,788,307,784,323,774,340,774,322,775,304,772,289,"
                    ]
            }, 
            {
                code:"cheding",
                name:"车顶",
                dataArr: [
                		"424,161,455,156,488,154,551,153,590,156,617,160,629,174,565,171,482,169,412,174,423,162,",
                		"462,172,445,164,429,161,413,157,467,154,529,154,604,161,645,175,579,171,519,170,463,175,",
                		"391,160,433,159,476,160,531,173,614,171,612,168,520,156,466,153,387,158,",
                		"",
                		"378,173,420,165,456,160,489,158,561,158,492,153,435,153,386,158,362,159,315,167,339,169,376,172",
                		"502,171,442,168,414,167,378,167,332,170,372,158,434,152,480,151,534,153,577,155,548,159,519,165,",
                		"634,172,599,170,557,168,519,167,472,168,436,169,407,171,419,158,449,154,479,152,513,151,550,151,584,153,622,157,",
                		"539,172,587,169,622,168,652,169,679,169,712,171,665,158,610,152,559,153,513,152,463,156,492,161,508,162,",
                		"502,155,580,159,662,173,702,172,718,166,678,160,593,152,499,155,",
                		"",
                		"427,172,448,171,480,172,508,174,550,163,601,158,649,162,681,162,603,155,542,155,499,157,425,171",
                		"400,175,463,170,538,171,577,175,603,163,632,159,532,155,454,159,429,162,397,175,"
                	]
            },
            {
                code:"zuoqianyeziban",
                name:"左前叶子板",
                dataArr: [
                		"",
                		"",
                		"",
                		"",
                		"",
                		"",
                		"",
                		"310,353,305,352,301,335,296,309,290,292,283,278,274,272,268,272,262,278,257,289,255,310,256,329,256,344,253,333,252,316,252,293,257,274,263,261,268,256,276,248,287,244,304,234,308,238,311,239,314,242,310,249,309,254,307,260,292,261,292,262,294,265,297,266,306,267,305,282,305,302,306,317,310,353,",
                		"162,280,173,292,179,290,191,281,206,279,216,280,228,283,240,289,252,300,263,321,268,342,272,364,289,364,283,346,280,328,278,307,278,285,277,273,257,273,246,266,279,265,282,255,287,248,293,243,297,239,293,225,275,230,270,241,263,247,182,264",
                		"330,376,307,376,304,352,298,330,290,315,270,297,254,289,222,285,202,289,184,298,174,308,152,293,179,271,178,270,280,250,286,247,299,231,321,224,331,237,325,242,321,248,317,270,278,271,285,276,296,277,319,276,318,302,320,328,323,349,329,373,",
                		"259,304,287,317,300,305,327,294,347,290,365,294,386,305,398,317,408,335,412,358,411,385,432,383,430,353,428,322,425,280,400,281,386,276,387,275,425,272,423,255,421,247,426,239,412,225,392,233,391,241,385,250,283,275,259,303,",
                		"472,309,495,322,502,309,511,302,524,295,537,295,549,303,557,321,561,343,558,387,569,384,571,360,572,335,572,309,569,284,568,280,554,283,547,277,568,272,566,262,558,245,558,240,541,227,530,236,535,238,534,244,533,257,532,257,482,278,"
                	]
            },
            {
                code:"youqianyeziban",
                name:"右前叶子板",
                dataArr: [
                		"",
                		"568,310,546,321,536,306,522,296,511,294,502,295,490,305,482,327,481,348,481,371,484,388,471,385,469,349,469,319,470,294,472,281,481,282,487,282,494,277,481,274,473,272,474,267,477,255,486,245,484,240,499,225,510,235,506,253,524,263,535,268,557,277,561,297,569,309,",
                		"783,304,755,317,738,303,714,293,692,291,662,300,646,313,635,330,630,360,630,375,630,385,609,383,615,280,641,282,648,280,656,275,616,272,618,256,618,244,615,239,629,226,649,234,652,245,658,252,755,277,768,291,784,305,",
                		"889,295,868,308,853,296,830,287,800,286,777,294,757,308,746,324,739,344,735,377,711,374,718,348,722,311,723,277,750,278,756,276,763,271,722,270,720,255,715,243,709,239,720,225,745,232,747,241,753,245,759,247,758,247,863,270,891,295,",
                		"770,365,751,365,758,343,762,325,764,302,764,279,763,271,785,272,791,267,792,266,762,265,759,255,757,250,746,240,743,238,747,224,769,234,777,246,784,250,860,263,875,283,866,295,847,281,830,278,812,283,798,292,787,304,778,322,772,345,769,364,",
                		"728,353,735,352,743,320,748,298,754,285,761,275,769,271,778,275,783,284,786,301,787,320,785,344,789,330,789,315,788,297,785,276,776,259,767,252,753,245,736,235,729,239,727,244,732,253,734,261,749,261,747,265,744,268,735,267,738,288,736,319,733,336,",
                		"",
                		"",
                		"",
                		"",
                		"",
                		""
                	]
            },
            {
                code:"youhouyeziban",
                name:"右后叶子板",
                dataArr: [
                		"",
                		"332,353,318,334,313,319,308,305,305,289,300,271,302,251,308,232,323,221,308,215,306,211,308,206,310,204,344,182,340,177,320,190,304,201,291,212,284,219,272,224,260,238,253,267,271,282,280,274,287,275,295,280,302,294,308,316,315,351,",
                		"316,178,312,170,271,182,242,194,213,206,185,218,177,218,158,225,151,236,159,245,138,273,210,288,225,281,239,280,255,283,271,294,285,315,294,342,296,361,353,366,327,361,314,351,290,309,268,266,265,253,274,235,285,222,249,215,243,210,244,206,273,193,293,185,",
                		"313,224,301,236,298,258,356,347,366,358,378,368,343,369,335,334,317,306,290,290,264,286,247,287,227,296,130,282,126,280,116,269,137,252,137,250,107,239,116,230,175,215,204,204,248,189,303,173,328,180,273,195,248,206,249,211,256,216,295,221,",
                		"377,171,386,183,341,203,336,207,340,213,349,217,405,225,404,252,426,292,443,319,460,351,472,368,481,373,446,372,444,345,433,318,410,299,377,291,341,303,258,295,237,295,225,289,212,277,234,259,234,254,202,247,181,244,189,234,205,232,227,225,250,213,312,191,349,178,",
                		"501,171,520,182,495,204,495,209,504,217,542,227,548,235,550,246,568,284,581,323,589,353,592,367,595,372,580,375,580,348,575,319,566,303,552,294,537,297,524,307,453,298,449,296,434,281,448,262,448,256,420,249,392,247,398,238,415,231,423,225,427,215,435,213,460,196,478,185,491,177,",
                		"635,173,645,173,667,216,672,224,681,233,683,238,697,255,697,260,687,251,674,248,661,248,663,237,660,231,644,215,646,210,640,186,",
                		"",
                		"",
                		"",
                		"",
                		""
                	]
            },
            {
                code:"zuohouyeziban",
                name:"左后叶子板",
                dataArr: [
                		"",
                		"",
                		"",
                		"",
                		"",
                		"",
                		"398,215,386,222,377,236,378,248,358,251,345,260,343,255,357,237,358,234,369,223,378,204,396,171,406,174,397,198,",
                		"514,305,586,298,593,295,606,282,599,273,592,261,593,256,606,251,647,246,641,237,621,228,613,222,613,214,606,212,590,203,544,175,523,186,536,196,545,203,544,210,535,217,519,221,499,224,497,233,492,237,493,241,471,286,457,330,448,362,446,372,460,377,460,348,463,325,472,304,482,295,494,292,507,298,",
                		"699,303,801,292,810,291,816,288,827,276,812,264,806,259,806,253,831,246,857,243,852,238,845,234,824,230,788,214,734,194,674,174,659,186,694,200,702,206,696,214,665,221,637,223,637,244,625,272,608,300,590,328,577,354,567,367,559,374,560,374,592,377,595,348,602,326,615,309,635,296,658,291,681,293,",
                		"729,223,740,234,742,244,743,254,730,278,699,324,674,358,665,367,652,372,697,373,700,350,707,328,716,313,740,295,761,287,785,286,802,290,814,297,861,292,914,283,924,270,909,258,902,250,905,247,934,238,930,232,864,216,811,195,735,173,728,182,790,205,790,210,783,214,755,220,",
                		"756,221,791,215,794,212,796,207,784,200,749,184,724,177,726,170,749,176,780,188,817,204,848,216,870,219,880,224,888,236,882,242,882,247,897,264,888,273,830,287,811,279,799,279,783,285,769,296,754,316,744,362,710,363,717,358,728,348,735,339,765,279,775,252,772,239,766,231,759,225,",
                		"719,219,739,247,739,256,739,270,728,316,724,329,716,343,705,354,725,350,730,323,736,296,745,280,752,274,759,274,767,279,788,263,782,246,777,237,767,226,757,222,738,206,702,179,700,186,714,195,724,203,730,210,729,215,",
                		""
                	]
            },
            {
                code:"xingligai",
                name:"行李盖",
                dataArr: [
                		"",
                		"",
                		"",
                		"175,214,135,226,117,230,111,234,107,238,107,241,100,238,98,229,104,220,110,219,120,218,145,214,159,214,177,211,",
                		"250,215,226,214,207,214,190,213,179,210,162,215,150,216,133,221,118,220,103,222,100,228,100,237,99,249,95,259,95,274,98,286,105,293,119,298,138,299,148,298,162,283,167,270,170,264,166,262,148,259,137,255,134,251,135,243,137,242,181,243,186,237,190,233,207,231,223,226,243,220,",
                		"427,215,428,219,424,224,415,230,400,236,397,239,391,246,389,249,359,249,311,248,318,258,324,261,377,268,379,269,366,287,357,298,342,305,307,309,264,309,210,303,189,300,185,295,178,285,173,265,188,262,200,259,204,257,212,248,171,246,177,237,185,229,198,225,204,224,231,212,238,213,307,213,383,213,",                		
                		"642,216,655,225,663,232,664,241,661,248,586,251,595,260,600,262,652,268,655,271,643,292,632,301,621,305,570,312,516,313,437,309,418,306,403,299,397,291,386,268,416,265,438,263,444,261,451,250,406,246,377,248,376,241,378,232,385,223,398,214,432,213,495,213,538,212,614,214,",
                		"613,214,613,220,616,225,622,230,640,236,647,246,651,251,726,249,722,257,716,261,662,269,676,293,684,299,694,304,760,309,815,306,846,301,854,297,860,289,867,264,845,260,835,257,827,246,867,244,859,232,852,228,835,225,807,212,803,213,712,213,652,214,",
                		"790,215,805,223,824,230,844,233,853,237,860,245,905,243,905,250,902,256,870,263,879,283,886,290,895,296,928,297,942,288,946,274,942,252,939,239,937,225,932,221,906,220,887,215,859,209,854,212,843,211,804,214,",
                		"863,216,893,222,917,229,929,233,935,239,940,237,939,222,934,218,926,218,909,218,882,215,867,212,859,213,",
                		"",
                		""
                	]
            },
            {
                code:"youhuoshijing",
                name:"右后视镜",
                dataArr: [
                		"363,245,360,243,365,231,365,217,363,216,343,218,334,221,327,229,328,236,333,240,343,242,353,253,",
                		"472,249,472,252,469,255,462,260,454,259,439,245,419,241,416,236,416,228,422,221,442,215,457,215,467,222,468,230,466,242,473,249,",
                		"601,253,598,256,582,261,571,260,558,246,542,241,538,232,544,223,555,218,568,216,573,215,582,218,594,228,590,243,602,249,",
                		"694,245,700,254,697,256,675,259,669,249,659,242,657,241,657,233,656,227,660,218,665,215,675,216,691,224,694,231,691,241,700,248,",
                		"740,242,746,250,722,253,715,241,716,218,718,219,719,238,723,237,725,231,724,223,716,215,731,220,738,228,739,236,742,241,",
                		"737,236,732,240,728,244,724,250,715,250,702,238,708,237,706,217,709,219,712,236,725,235,731,233,731,226,723,219,709,218,709,216,727,217,736,225,738,230,734,236,",
                		"",
                		"",
                		"",
                		"",
                		"",
                		""
                	]
            },
            {
                code:"zuohuoshijing",
                name:"左后视镜",
                dataArr: [
                		"675,247,685,254,698,242,707,241,713,237,714,229,708,223,688,215,678,214,675,216,674,221,677,232,678,239,",
                		"722,218,735,227,746,231,742,223,736,218,721,216,",
                		"",
                		"",
                		"",
                		"",
                		"",
                		"335,240,328,248,318,250,315,245,312,241,305,237,303,230,306,222,313,217,332,214,322,218,313,222,310,228,311,234,327,236,329,234,332,220,335,217,333,236,",
                		"327,241,321,253,297,251,300,242,302,238,301,232,303,225,309,221,323,217,317,221,315,232,317,238,322,238,323,220,325,218,325,240,",
                		"383,243,376,247,372,259,341,254,344,247,351,242,345,232,349,224,364,217,376,216,382,223,384,232,384,238,",
                		"500,242,483,247,469,262,446,260,439,250,448,243,447,234,447,229,452,220,469,216,488,220,499,227,501,235,498,241,484,244,",
                		"625,239,603,244,586,255,584,257,576,259,568,250,573,243,573,236,573,226,577,219,585,215,613,220,623,227,626,232,"
                	]
            },
            {
                code:"youxiabianliang",
                name:"右下边梁",
                dataArr: [
                		"",
                		"483,388,486,397,416,381,362,371,316,361,316,350,341,355,378,363,473,386,",
                		"629,387,631,395,489,386,359,378,298,373,296,360,343,366,421,370,608,384,",
                		"735,378,735,386,500,385,343,384,341,367,402,370,564,374,710,375,",
                		"769,364,766,373,638,380,521,386,446,388,446,371,502,374,581,372,750,365,",
                		"735,354,733,361,672,372,611,382,578,390,578,375,618,370,674,360,732,352,",
                		"",
                		"",
                		"",
                		"",
                		"",
                		""
                	]
            },
            {
                code:"zuoxiabianliang",
                name:"左下边梁",
                dataArr: [
                		"",
                		"",
                		"",
                		"",
                		"",
                		"",
                		"",
                		"307,355,308,361,333,365,389,376,431,384,463,391,462,378,438,374,361,361,325,356,309,354,",
                		"272,365,275,373,435,382,596,391,593,375,465,372,277,365,",
                		"306,379,307,386,548,387,698,384,699,370,570,374,326,375,",
                		"412,385,411,395,603,382,742,375,744,360,648,367,459,381,",
                		"558,388,555,397,651,377,724,363,726,350,668,362,566,385,"
                	]
            }
            
            
            
            
            

    ]

    //设置汽车各部件数据
    var o = document.getElementById("autodiv");
    var w = o.offsetWidth;
    var bili =parseFloat(w)/1000;
    for(var i=0;i<qichebujian.length;i++){
        upZuobiao(qichebujian[i]['dataArr'],bili);
        car[qichebujian[i]['code']] = {
            name : qichebujian[i]['name'],
            code : qichebujian[i]['code'],
            path: R.path(qichebujian[i].dataArr[index]).attr(attr)
        }
    }
}

//根据比例缩放数据
function upZuobiao(arr,bili){

	for(var i=0;i<arr.length;i++){
		var str = arr[i];
		if(str.length==0)continue;

		var strArr = str.split(',');
		var strItem = "M"
		for(var j=0;j<strArr.length;j++){
			if(i==strArr.length-1){
				strItem+=(parseFloat(strArr[j])*bili).toFixed(2)
			}else{
				strItem+=(parseFloat(strArr[j])*bili).toFixed(2)+","
			}

		}
		strItem+="z";
		arr[i] = strItem;
	}
}
﻿/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved. 
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *   
 *  The above copyright notice and this permission notice shall be included in 
 *  all copies or substantial portions of the Software.
 *   
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */

/// <reference path="../_references.ts"/>

module powerbi.visuals {
    import Utility = jsCommon.Utility;

    export module UrlHelper {
        export function isValidUrl(columnItem: DataViewMetadataColumn, value: string): boolean {
            return columnItem != null
                && columnItem.type != null
                && columnItem.type.misc != null
                && columnItem.type.misc.webUrl != null
                && columnItem.type.misc.webUrl
                && value != null
                && Utility.isValidUrl(value);
        }

        export function isValidImage(columnItem: DataViewMetadataColumn, value: string): boolean {
            return isImageColumn(columnItem)
                && value
                && Utility.isValidUrl(value);
        }

        export function hasImageColumn(dataView: DataView): boolean {
            if (!dataView || !dataView.metadata || _.isEmpty(dataView.metadata.columns))
                return false;

            for (let columnItem of dataView.metadata.columns)
                if (isImageColumn(columnItem))
                    return true;

            return false;
        }

        function isImageColumn(columnItem: DataViewMetadataColumn): boolean {
            return columnItem
                && columnItem.type
                && columnItem.type.misc
                && columnItem.type.misc.imageUrl;
        }
    }
}
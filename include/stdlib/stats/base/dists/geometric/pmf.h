/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#ifndef STDLIB_STATS_BASE_DISTS_GEOMETRIC_PMF_H
#define STDLIB_STATS_BASE_DISTS_GEOMETRIC_PMF_H

/*
* If C++, prevent name mangling so that the compiler emits a binary file having undecorated names, thus mirroring the behavior of a C compiler.
*/
#ifdef __cplusplus
extern "C" {
#endif

/**
* Evaluates the probability mass function (PMF) for a geometric distribution with success probability `p` at a value `x`.
*/
double stdlib_base_dists_geometric_pmf( const double x, const double p );

#ifdef __cplusplus
}
#endif

#endif // !STDLIB_STATS_BASE_DISTS_GEOMETRIC_PMF_H